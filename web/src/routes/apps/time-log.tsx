import { createFileRoute } from '@tanstack/react-router'

import { TimeLogPage } from '#/features/time-log/TimeLogPage'

export const Route = createFileRoute('/apps/time-log')({
  component: TimeLogPage,
})
