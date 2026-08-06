import type { QueryClient as QueryCoreQueryClient } from '@tanstack/query-core'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { PropsWithChildren } from 'react'

const queryClient = new QueryClient()

declare global {
  interface Window {
    __TANSTACK_QUERY_CLIENT__: QueryCoreQueryClient
  }
}

window.__TANSTACK_QUERY_CLIENT__ = queryClient

export const QueryProvider = (p: PropsWithChildren) => (
  <QueryClientProvider client={queryClient}>{p.children}</QueryClientProvider>
)
