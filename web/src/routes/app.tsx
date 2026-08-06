import { createFileRoute } from '@tanstack/react-router'

import { TaskCard } from '#/features/task/TaskCard'

export const Route = createFileRoute('/app')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='flex min-h-dvh flex-col items-center justify-center p-4'>
      <TaskCard />
    </div>
  )
}
