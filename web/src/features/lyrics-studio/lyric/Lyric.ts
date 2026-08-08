import { Guid } from '#/common/helpers/Guid'
import { type Option } from '#/common/helpers/Option'

import type { LanguageCode } from './LanguageCode'
import type { LocalizedText } from './LocalizedText'

type LyricMetadata = {
  title: LocalizedText
  artist: Option<LocalizedText>
  source: Option<string>
  imageUrl: Option<string>
}

type LyricSettings = {
  defaultLanguage: LanguageCode
}

type LyricBlockBase = {
  id: Guid
  endTimestamp: number
}

type LyricBlockVerse = LyricBlockBase & {
  type: 'verse'
  overrideDefaultLanguage?: LanguageCode
  lines: LocalizedText[]
}

type LyricBlockInstrumental = LyricBlockBase & {
  type: 'instrumental'
  text?: string
}

type LyricBlock = LyricBlockVerse | LyricBlockInstrumental

interface ILyric {
  metadata: LyricMetadata
  settings: LyricSettings
  blocks: LyricBlock[]
}

export class Lyric implements ILyric {
  metadata: LyricMetadata
  settings: LyricSettings
  blocks: LyricBlock[]

  constructor(lyric: ILyric) {
    this.metadata = lyric.metadata
    this.settings = lyric.settings
    this.blocks = lyric.blocks
  }

  clone = (): Lyric => new Lyric(structuredClone(this))

  addBlock(block: LyricBlock) {
    this.blocks.push(block)
  }

  addEmptyBlock() {
    this.blocks.push({
      id: Guid.new(),
      endTimestamp: 0,
      type: 'instrumental',
    })
  }
}
