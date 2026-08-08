import z from 'zod'

import { zLanguageCode } from './LanguageCode'

export const zLyricBlock = z.object({
  id: z.string(),
  endTimestamp: z.number(),
  defaultLanguageOverride: zLanguageCode.optional(),
  tx: z.string(),
  ar: z.string(),
  en: z.string(),
  es: z.string(),
  fa: z.string(),
  ja: z.string(),
  rj: z.string(),
})
export type LyricBlock = z.infer<typeof zLyricBlock>
