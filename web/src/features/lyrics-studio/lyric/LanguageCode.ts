import z from 'zod'

export const zLanguageCode = z.union([
  z.literal('en'),
  z.literal('ja'),
  z.literal('fa'),
  z.literal('es'),
  z.literal('ar'),
  z.literal('romaji'),
])

export type LanguageCode = z.infer<typeof zLanguageCode>

export const languageCodeUtils = {}
