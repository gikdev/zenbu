import { RootComponent } from '#/features/root/RootComponent'
import { createRootRoute } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: RootComponent,
})
