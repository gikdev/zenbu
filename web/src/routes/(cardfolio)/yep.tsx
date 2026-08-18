import { createFileRoute } from '@tanstack/react-router'

import { YepPage } from '#/features/Cardfolio/pages/YepPage'

export const Route = createFileRoute('/(cardfolio)/yep')({
  component: YepPage,
})
