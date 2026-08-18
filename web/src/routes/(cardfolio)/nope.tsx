import { createFileRoute } from '@tanstack/react-router'

import { NopePage } from '#/features/Cardfolio/pages/NopePage'

export const Route = createFileRoute('/(cardfolio)/nope')({
  component: NopePage,
})
