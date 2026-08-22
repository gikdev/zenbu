import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import { tv } from 'tailwind-variants'

import type { LinkItem } from './LinkItem'

interface HomeBtnProps {
  item: LinkItem
  className?: string
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

export const HomeBtn = (p: HomeBtnProps) => {
  const [isHovered, setIsHovered] = useState(false)

  const { icon, tags, title, url } = p.item
  const isDisabled = tags.includes('disabled')
  const isNewTab = tags.includes('new-tab')
  const isPinned = tags.includes('pinned')

  if (isDisabled) return null

  return (
    <Link
      to={url}
      title={title}
      className={styleBtnBase({ class: ['group', isPinned ? 'justify-center' : '', p.className] })}
      target={isNewTab ? '_blank' : '_self'}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {!isPinned && <span className='me-auto flex items-center gap-3'>{title}</span>}

      {icon.type === 'icon' && (
        <icon.icon
          size={24}
          weight={isHovered ? 'fill' : 'regular'}
          className='shrink-0 transition-all group-hover:rotate-10'
        />
      )}

      {icon.type === 'node' && <span className='shrink-0 transition-all group-hover:rotate-10'>{icon.node}</span>}
    </Link>
  )
}
