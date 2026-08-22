import type { Icon } from '@phosphor-icons/react'

type LinkTag = 'new-tab'

export type LinkItem = {
  id: string
  title: string
  url: string
  tags: LinkTag[]
  icon: Icon
}
