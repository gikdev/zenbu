import { YepPage } from '#/features/Cardfolio/pages/YepPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(cardfolio)/yep')({
  component: YepPage,
})
