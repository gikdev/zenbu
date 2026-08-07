import z from 'zod'

import { zLocalizedText, type LocalizedText } from './LocalizedText'

export const zSongMetadata = z.object({
  title: zLocalizedText,
  artist: zLocalizedText.nullable(),
  source: z.string().nullable(),
})

export type SongMetadata = z.infer<typeof zSongMetadata>

export const songMetadataUtils = {
  /** Update the song title. */
  setTitle: (metadata: SongMetadata, title: LocalizedText): SongMetadata => ({
    ...metadata,
    title,
  }),

  /** Update the artist (or null to remove). */
  setArtist: (metadata: SongMetadata, artist: LocalizedText | null): SongMetadata => ({
    ...metadata,
    artist,
  }),

  /** Update the source URL (or null to remove). */
  setSource: (metadata: SongMetadata, source: string | null): SongMetadata => ({
    ...metadata,
    source,
  }),
}
