export const DockAppTag = {
  Bookmarked: 'Bookmarked',
  Idea: 'Idea',
  Mvp: 'Mvp',
  App: 'App',
  Requires_Server: 'Requires:Server',
  Wip: 'Wip',
  Deprecated: 'Deprecated',
  Disabled: 'Disabled',
} as const

export type DockAppTag = (typeof DockAppTag)[keyof typeof DockAppTag]
