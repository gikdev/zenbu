import { createFileRoute } from '@tanstack/react-router'

import { SectionsLauncherPage } from '#/features/phrase-player/SectionsLauncherPage'

export const Route = createFileRoute('/apps/phrase-player/')({
  component: SectionsLauncherPage,
})
