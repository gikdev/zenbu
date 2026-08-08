import z from 'zod'

import { zLanguageCode } from './LanguageCode'

export const zLocalizedText = z.object({
  lang: zLanguageCode,
  text: z.string(),
})

export type LocalizedText = z.infer<typeof zLocalizedText>
