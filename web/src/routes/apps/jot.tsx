import { createFileRoute } from '@tanstack/react-router'

import { JotPage } from '#/features/Jot'

export const Route = createFileRoute('/apps/jot')({
  component: JotPage,
})
