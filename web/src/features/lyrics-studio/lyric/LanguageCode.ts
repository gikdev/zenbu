import z from 'zod'

export const zLanguageCode = z.union([
  z.literal('en'),
  z.literal('ja'),
  z.literal('fa'),
  z.literal('es'),
  z.literal('ar'),
  z.literal('rj'),
])

export type LanguageCode = z.infer<typeof zLanguageCode>

export const languageCodeUtils = {
  /** Get a list of all available values */
  getListOfAllValues(): LanguageCode[] {
    return ['ar', 'en', 'es', 'fa', 'ja', 'rj']
  },

  /** Validate a string or fall back to a value */
  validateOrDefault(input: string, fallback: LanguageCode): LanguageCode {
    const result = zLanguageCode.safeParse(input)
    return result.success ? result.data : fallback
  },
}
