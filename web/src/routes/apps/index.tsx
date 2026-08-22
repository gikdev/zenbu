import { createFileRoute } from '@tanstack/react-router'

import { DockPage } from '#/features/Dock'

export const Route = createFileRoute('/apps/')({
  component: DockPage,
})
