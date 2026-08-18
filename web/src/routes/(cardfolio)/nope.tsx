import { NopePage } from '#/features/Cardfolio/pages/NopePage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(cardfolio)/nope')({
  component: NopePage,
})
