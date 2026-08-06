import { createRootRoute } from '@tanstack/react-router'

import { RootComponent } from '#/features/root/RootComponent'

export const Route = createRootRoute({
  component: RootComponent,
})
