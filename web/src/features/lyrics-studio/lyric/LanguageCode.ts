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

export const languageCodes: LanguageCode[] = ['ar', 'en', 'es', 'fa', 'ja', 'rj']

export const languageCodeUtils = {
  /** Validate a string or fall back to a value */
  validateOrDefault(input: string, fallback: LanguageCode): LanguageCode {
    const result = zLanguageCode.safeParse(input)
    return result.success ? result.data : fallback
  },
}
