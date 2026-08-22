import { createFileRoute } from '@tanstack/react-router'

import { HomePage } from '#/features/Cardfolio/home'

export const Route = createFileRoute('/(cardfolio)/')({
  component: HomePage,
})
