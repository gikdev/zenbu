import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import { tv } from 'tailwind-variants'

import type { LinkItem } from '../LinkItem'

interface ProfileButtonProps {
  item: LinkItem
}

const styleBtnBase = tv({
  base: `
    flex flex-1 items-center gap-3
    min-w-max
    rounded-xl bg-white/5 px-5 py-4
    transition-all hover:bg-white/10
    hover:text-text-important
  `,
})

export const ProfileButton = ({ item }: ProfileButtonProps) => {
  const [isHovered, setIsHovered] = useState(false)

  const isDisabled = item.tags.includes('disabled')
  const isNewTab = item.tags.includes('new-tab')
  const isPinned = item.tags.includes('pinned')

  if (isDisabled) return null

  return (
    <Link
      to={item.url}
      title={item.title}
      className={styleBtnBase({ class: ['group', isPinned ? 'justify-center' : ''] })}
      target={isNewTab ? '_blank' : '_self'}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {!isPinned && <span className='me-auto flex items-center gap-3'>{item.title}</span>}

      {item.icon.type === 'icon' && (
        <item.icon.icon
          size={24}
          weight={isHovered ? 'fill' : 'regular'}
          className='shrink-0 transition-all group-hover:rotate-10'
        />
      )}

      {item.icon.type === 'node' && (
        <span className='shrink-0 transition-all group-hover:rotate-10'>{item.icon.node}</span>
      )}
    </Link>
  )
}
