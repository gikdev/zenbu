import { createRouter } from '@tanstack/react-router'

import { routeTree } from '../assets/route-tree.gen'

export const router = createRouter({
  routeTree,
  defaultPreload: 'viewport',
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
