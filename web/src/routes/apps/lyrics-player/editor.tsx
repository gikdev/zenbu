import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/apps/lyrics-player/editor')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/apps/lyrics-player/editor"!</div>
}
