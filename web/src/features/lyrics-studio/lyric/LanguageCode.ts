import z from 'zod'

export const zLanguageCode = z.union([
  z.literal('en'),
  z.literal('ja'),
  z.literal('fa'),
  z.literal('es'),
  z.literal('ar'),
  z.literal('rj'),
  z.literal('tx'),
])

/**
 * - `en`: English
 * - `ja`: Japanese
 * - `fa`: Persian
 * - `es`: Spanish
 * - `ar`: Arabic
 * - `rj`: Romaji
 * - `tx`: Instrumental/Hint/Explanation text (e.g. '(applause)', or '(music playing...)')
 */
export type LanguageCode = z.infer<typeof zLanguageCode>

export const languageCodes: LanguageCode[] = ['ar', 'en', 'es', 'fa', 'ja', 'rj', 'tx']

export const languageCodeUtils = {
  /** Validate a string or fall back to a value */
  validateOrDefault(input: string, fallback: LanguageCode): LanguageCode {
    const result = zLanguageCode.safeParse(input)
    return result.success ? result.data : fallback
  },
}
