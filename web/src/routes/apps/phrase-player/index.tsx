import { createFileRoute } from '@tanstack/react-router'

import { SectionsLauncher } from '#/features/phrase-player/SectionsLauncher'

export const Route = createFileRoute('/apps/phrase-player/')({
  component: SectionsLauncher,
})
