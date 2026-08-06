import type { Icon } from '@phosphor-icons/react'

export type IAppShortcut = {
  id: string
  icon: Icon
  url: string
  name: string
  description: string
  disabled: boolean
}
