import { WritingArea } from '#/features/WritingArea'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/apps/writing-area')({
  component: WritingArea,
})
