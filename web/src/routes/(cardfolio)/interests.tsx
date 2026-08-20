import { createFileRoute } from '@tanstack/react-router'

import { InterestsPage } from '#/features/Cardfolio/pages/InterestsPage'

export const Route = createFileRoute('/(cardfolio)/interests')({
  component: InterestsPage,
})
