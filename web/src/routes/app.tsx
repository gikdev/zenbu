import { createFileRoute } from '@tanstack/react-router'

import { TaskPage } from '#/features/task/TaskPage'

export const Route = createFileRoute('/app')({
  component: TaskPage,
})
