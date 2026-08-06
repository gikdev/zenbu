import { createFileRoute } from '@tanstack/react-router'

import { WritingArea } from '#/features/WritingArea'

export const Route = createFileRoute('/apps/writing-area')({
  component: WritingArea,
})
