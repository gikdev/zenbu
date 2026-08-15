import { err, ok, type Result } from 'neverthrow'
import z from 'zod'

import { generateShortId } from '#/common/helpers/generateShortId'

import { zLyricBlock, type LyricBlock } from './LyricBlock'
import { zLyricMetadata, type LyricMetadata } from './LyricMetadata'
import { zLyricSettings, type LyricSettings } from './LyricSettings'

const zILyric = z.object({
  metadata: zLyricMetadata,
  settings: zLyricSettings,
  blocks: z.array(zLyricBlock),
})
type ILyric = z.infer<typeof zILyric>

export class Lyric implements ILyric {
  readonly #ID_LENGTH = 2

  metadata: LyricMetadata
  settings: LyricSettings
  blocks: LyricBlock[]

  constructor(lyric: ILyric) {
    const { blocks, metadata, settings } = window.structuredClone(lyric)

    this.metadata = metadata
    this.settings = settings
    this.blocks = blocks
  }

  // 1. Static factory method: safely parse JSON and create a Lyric instance
  static create(jsonString: string): Result<Lyric, string> {
    let raw: unknown

    try {
      raw = JSON.parse(jsonString)
    } catch (error) {
      return err(`Invalid JSON: ${(error as Error).message}`)
    }

    const result = zILyric.safeParse(raw)

    if (!result.success) {
      return err(`Validation failed: ${result.error.message}`)
    }

    return ok(new Lyric(result.data))
  }

  toJsonString(): string {
    return JSON.stringify(this.toJson())
  }

  toJson(): ILyric {
    return {
      metadata: this.metadata,
      settings: this.settings,
      blocks: this.blocks,
    }
  }

  toLrc(): string {
    const lines: string[] = []

    // --- Metadata headers ---
    if (this.metadata.title.text) {
      lines.push(`[ti:${this.metadata.title.text}]`)
    }
    if (this.metadata.artist?.text) {
      lines.push(`[ar:${this.metadata.artist.text}]`)
    }
    // note: [al:] not available; could be added later
    // note: [by:] not available; could be added later
    lines.push('[offset:0]')

    lines.push('') // empty line

    // --- Sort blocks by endTimestamp (just in case) ---
    const sorted = [...this.blocks].sort((a, b) => a.endTimestamp - b.endTimestamp)

    const lang = this.settings.defaultLanguage // e.g., 'en', 'es', 'ja', etc.

    let prevEnd = 0

    for (const block of sorted) {
      // Format start time = prevEnd (mm:ss.cc)
      const startSec = prevEnd
      const mins = Math.floor(startSec / 60)
      const secs = Math.floor(startSec % 60)
      const centis = Math.round((startSec - Math.floor(startSec)) * 100)

      const ts = `[${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}.${String(centis).padStart(2, '0')}]`

      // Get text in the default language (fallback to empty string)
      const text = (block[lang as keyof LyricBlock] as string) || ''

      // Only output if there's actual text (skip empty lines)
      if (text.trim()) {
        lines.push(`${ts}${text.trim()}`)
      }

      // Advance time for next block
      prevEnd = block.endTimestamp
    }

    return lines.join('\n')
  }

  toSrt(languageCode?: string): string {
    const lang = languageCode || this.settings.defaultLanguage
    const sorted = [...this.blocks].sort((a, b) => a.endTimestamp - b.endTimestamp)

    const lines: string[] = []
    let prevEnd = 0
    let index = 1

    for (const block of sorted) {
      const startSec = prevEnd
      const endSec = block.endTimestamp
      const text = (block[lang as keyof LyricBlock] as string) || ''

      // Only output blocks that have actual text in that language
      if (text.trim()) {
        const startStr = this.#formatSrtTime(startSec)
        const endStr = this.#formatSrtTime(endSec)

        lines.push(String(index))
        lines.push(`${startStr} --> ${endStr}`)
        lines.push(text.trim())
        lines.push('') // blank line after each entry
        index++
      }

      prevEnd = endSec
    }

    return lines.join('\n').trim()
  }

  #formatSrtTime(seconds: number): string {
    const totalMs = Math.round(seconds * 1000)
    const hrs = Math.floor(totalMs / 3600000)
    const mins = Math.floor((totalMs % 3600000) / 60000)
    const secs = Math.floor((totalMs % 60000) / 1000)
    const ms = totalMs % 1000

    return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')},${String(ms).padStart(3, '0')}`
  }

  clone = (): Lyric =>
    new Lyric({
      blocks: this.blocks,
      metadata: this.metadata,
      settings: this.settings,
    })

  /**
   * Returns the lyric block that should be playing at the given timestamp.
   * Blocks are treated as contiguous: block i starts at the end of block i-1
   * (with the first block starting at 0). The current block is the one whose
   * endTimestamp is the first to be greater than `currentTimestamp`.
   *
   * @param currentTimestamp - time in seconds (non‑negative)
   * @returns the matching LyricBlock, or `undefined` if no block is active
   */
  getCurrentBlock(currentTimestamp: number): LyricBlock | null {
    if (currentTimestamp < 0) return null

    // Sort a copy by endTimestamp (ascending)
    const sorted = [...this.blocks].sort((a, b) => a.endTimestamp - b.endTimestamp)

    // The first block whose end is strictly after the current time is the active one
    for (const block of sorted) {
      if (block.endTimestamp > currentTimestamp) {
        return block
      }
    }

    // All blocks have ended
    return null
  }

  addBlock(block: LyricBlock) {
    this.blocks.push(block)

    return this
  }

  batchAddBlock(input: string | string[]) {
    const lines: string[] = Array.isArray(input) ? [...input] : input.split('\n')

    for (const line of lines) {
      const block: LyricBlock = {
        id: this.#generateUniqueBlockId(),
        endTimestamp: 0,
        tx: '',
        ar: '',
        en: '',
        es: '',
        fa: '',
        ja: '',
        rj: '',
      }

      block[this.settings.defaultLanguage] = line

      this.addBlock(block)
    }

    return this
  }

  removeBlock(blockId: string) {
    const index = this.blocks.findIndex(b => b.id === blockId)
    if (index === -1) return
    this.blocks.splice(index, 1)

    return this
  }

  updateBlock(updatedBlock: LyricBlock) {
    const index = this.blocks.findIndex(b => b.id === updatedBlock.id)
    if (index === -1) return
    this.blocks[index] = updatedBlock

    return this
  }

  addEmptyBlock() {
    this.blocks.push({
      id: this.#generateUniqueBlockId(),
      endTimestamp: 0,
      tx: '',
      ar: '',
      en: '',
      es: '',
      fa: '',
      ja: '',
      rj: '',
    })

    return this
  }

  #generateUniqueBlockId(): string {
    const existingIds = new Set(this.blocks.map(b => b.id))
    let id: string
    let attempts = 0
    const maxAttempts = 100

    do {
      id = generateShortId(this.#ID_LENGTH)
      attempts++
    } while (existingIds.has(id) && attempts < maxAttempts)

    return id
  }
}
