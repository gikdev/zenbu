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

  clone = (): Lyric =>
    new Lyric({
      blocks: this.blocks,
      metadata: this.metadata,
      settings: this.settings,
    })

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
