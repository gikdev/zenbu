import { generateShortId } from '#/common/helpers/generateShortId'

import type { LanguageCode } from './LanguageCode'
import type { LocalizedText } from './LocalizedText'

export type LyricMetadata = {
  title: LocalizedText
  artist: LocalizedText | null
  source: string | null
  imageUrl: string | null
}

export type LyricSettings = {
  defaultLanguage: LanguageCode
}

export type LyricBlock = {
  id: string
  endTimestamp: number
  defaultLanguageOverride?: LanguageCode
  tx: string
  ar: string
  en: string
  es: string
  fa: string
  ja: string
  rj: string
}

export interface ILyric {
  metadata: LyricMetadata
  settings: LyricSettings
  blocks: LyricBlock[]
}

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

  clone = (): Lyric =>
    new Lyric({
      blocks: this.blocks,
      metadata: this.metadata,
      settings: this.settings,
    })

  addBlock(block: LyricBlock) {
    this.blocks.push(block)
  }

  removeBlock(blockId: string) {
    const index = this.blocks.findIndex(b => b.id === blockId)
    if (index === -1) return
    this.blocks.splice(index, 1)
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
