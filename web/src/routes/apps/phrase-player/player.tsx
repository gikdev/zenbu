import { createFileRoute } from '@tanstack/react-router'

import { PlayerPage } from '#/features/phrase-player/PlayerPage'

export const Route = createFileRoute('/apps/phrase-player/player')({
  component: PlayerPage,
})
