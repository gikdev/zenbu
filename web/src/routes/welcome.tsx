import { createFileRoute } from '@tanstack/react-router'

import { WelcomeCard } from '#/features/welcome/WelcomeCard'

export const Route = createFileRoute('/welcome')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='flex min-h-dvh flex-col items-center justify-center bg-mist-950 p-4 text-mist-400'>
      <WelcomeCard />
    </div>
  )
}
