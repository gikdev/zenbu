import { createFileRoute } from '@tanstack/react-router'

import { LyricsPlayerPage } from '#/features/lyrics-studio/lyrics-player/LyricsPlayerPage'

export const Route = createFileRoute('/apps/(lyrics-studio)/lyrics-player')({
  component: LyricsPlayerPage,
})
