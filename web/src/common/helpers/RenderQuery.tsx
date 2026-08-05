import type { ReactNode } from 'react'

type SuccessProps<T> =
  | {
      data: T
      isList: false
      successView: (data: T) => ReactNode
    }
  | {
      items: T[]
      isList: true
      emptyView: ReactNode
      fullView: (items: T[]) => ReactNode
    }

function renderSuccess<T>(p: SuccessProps<T>) {
  if (!p.isList) return p.successView(p.data)
  return p.items.length < 1 ? p.emptyView : p.fullView(p.items)
}

type RenderQueryProps<T> = {
  status: 'error' | 'success' | 'pending'
  errorView: ReactNode
  loadingView: ReactNode
} & SuccessProps<T>

export function RenderQuery<T>(p: RenderQueryProps<T>) {
  if (p.status === 'pending') return p.loadingView
  if (p.status === 'error') return p.errorView
  if (p.status === 'success') return renderSuccess(p)
  return null
}
