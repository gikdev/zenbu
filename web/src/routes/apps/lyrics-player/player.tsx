import { createFileRoute } from '@tanstack/react-router'

import { PlayerPage } from '#/features/lyrics-player/PlayerPage'

export const Route = createFileRoute('/apps/lyrics-player/player')({
  component: PlayerPage,
})
