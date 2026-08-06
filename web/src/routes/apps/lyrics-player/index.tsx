import { createFileRoute } from '@tanstack/react-router'

import { SectionsLauncherPage } from '#/features/lyrics-player/SectionsLauncherPage'

export const Route = createFileRoute('/apps/lyrics-player/')({
  component: SectionsLauncherPage,
})
