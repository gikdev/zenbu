import { BlankPage } from '#/features/Cardfolio/pages/BlankPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(cardfolio)/blank')({
  component: BlankPage,
})
