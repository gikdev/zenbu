import { createFileRoute } from '@tanstack/react-router'

import { BlankPage } from '#/features/Cardfolio/pages/BlankPage'

export const Route = createFileRoute('/(cardfolio)/blank')({
  component: BlankPage,
})
