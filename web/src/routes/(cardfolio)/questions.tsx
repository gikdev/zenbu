import { createFileRoute } from '@tanstack/react-router'

import { QuestionsPage } from '#/features/Cardfolio/pages/QuestionsPage'

export const Route = createFileRoute('/(cardfolio)/questions')({
  component: QuestionsPage,
})
