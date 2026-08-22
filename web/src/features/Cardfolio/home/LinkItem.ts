import type { Icon } from '@phosphor-icons/react'
import type { ReactNode } from 'react'

type LinkTag = 'disabled' | 'new-tab' | 'pinned'

type LinkIcon = { type: 'icon'; icon: Icon } | { type: 'node'; node: ReactNode }

export type LinkItem = {
  id: string
  title: string
  url: string
  tags: LinkTag[]
  icon: LinkIcon
}
