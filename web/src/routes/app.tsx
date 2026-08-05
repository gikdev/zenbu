import { createFileRoute } from '@tanstack/react-router'

import { TaskCard } from '#/features/task/TaskCard'

export const Route = createFileRoute('/app')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='flex min-h-dvh flex-col items-center justify-center bg-mist-950 p-4 text-mist-400'>
      <TaskCard />
    </div>
  )
}
