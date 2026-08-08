import z from 'zod'

import { zLanguageCode } from './LanguageCode'

export const zLyricSettings = z.object({
  defaultLanguage: zLanguageCode,
})
export type LyricSettings = z.infer<typeof zLyricSettings>
