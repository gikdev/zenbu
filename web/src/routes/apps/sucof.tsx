import { createFileRoute } from '@tanstack/react-router'

import { SucofPage } from '#/features/Sucof/SucofPage'

export const Route = createFileRoute('/apps/sucof')({
  component: SucofPage,
})
