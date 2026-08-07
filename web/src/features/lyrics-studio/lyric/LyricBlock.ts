import z from 'zod'

import { zLanguageCode } from './LanguageCode'
import { zLyricBlockType, type LyricBlockType } from './LyricBlockType'

export const zLyricBlock = z.object({
  endTimestamp: z.number().min(0),
  type: zLyricBlockType,
  mainLang: zLanguageCode.nullable(),
  text: z.string(),
  en: z.string(),
  fa: z.string(),
  ja: z.string(),
  rj: z.string(),
  es: z.string(),
  ar: z.string(),
})

export type LyricBlock = z.infer<typeof zLyricBlock>

export const lyricBlockUtils = {
  /** Create a new block. */
  create(type: LyricBlockType): LyricBlock {
    return {
      type,
      mainLang: null,
      endTimestamp: 0,
      text: '',
      en: '',
      fa: '',
      ja: '',
      rj: '',
      es: '',
      ar: '',
    }
  },

  /** Check if block is a verse. */
  isVerse: (block: LyricBlock): block is LyricBlock => block.type === 'verse',

  /** Check if block is instrumental. */
  isInstrumental: (block: LyricBlock): block is LyricBlock => block.type === 'instrumental',
}
