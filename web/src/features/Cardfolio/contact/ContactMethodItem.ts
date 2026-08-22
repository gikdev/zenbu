import type { Icon } from '@phosphor-icons/react'
import type { ReactNode } from 'react'

type ContactMethodIcon = { type: 'icon'; icon: Icon } | { type: 'node'; node: ReactNode }

export type ContactMethodItem = {
  id: string
  title: string
  url: string
  icon: ContactMethodIcon
}
