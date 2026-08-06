import { createFileRoute } from '@tanstack/react-router'

import { WelcomeCard } from '#/features/welcome/WelcomeCard'

export const Route = createFileRoute('/welcome')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='flex min-h-dvh flex-col items-center justify-center p-4'>
      <WelcomeCard />
    </div>
  )
}
