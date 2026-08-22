import type { Icon } from '@phosphor-icons/react'
import type { LinkOptions } from '@tanstack/react-router'

import type { DockAppTag } from './DockAppTag'

export type DockApp = {
  id: string
  name: string
  icon: Icon
  url: LinkOptions
  description?: string
  tags: DockAppTag[]
}
