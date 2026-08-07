import z from 'zod'

import { zLanguageCode, type LanguageCode } from './LanguageCode'

export const zLocalizedText = z.object({
  lang: zLanguageCode,
  text: z.string(),
})

export type LocalizedText = z.infer<typeof zLocalizedText>

export const localizedTextUtils = {
  /** Switch the language of the localized text. */
  switchLanguage: (text: LocalizedText, newLang: LanguageCode): LocalizedText => ({
    ...text,
    lang: newLang,
  }),

  /** Change the text content. */
  changeText: (text: LocalizedText, newText: string): LocalizedText => ({ ...text, text: newText }),
}
