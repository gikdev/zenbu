import { createFileRoute } from '@tanstack/react-router'

import { LyricsSyncerPage } from '#/features/lyrics-studio/lyrics-syncer/LyricsSyncerPage'

export const Route = createFileRoute('/apps/(lyrics-studio)/lyrics-syncer')({
  component: LyricsSyncerPage,
})
