import z from 'zod'

import { zLocalizedText } from './LocalizedText'

export const zLyricMetadata = z.object({
  title: zLocalizedText,
  artist: zLocalizedText.nullable(),
  source: z.string().nullable(),
  imageUrl: z.string().nullable(),
})
export type LyricMetadata = z.infer<typeof zLyricMetadata>
