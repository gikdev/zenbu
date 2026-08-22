import { BookmarkSimpleIcon } from '@phosphor-icons/react'
import { useNavigate, useRouter } from '@tanstack/react-router'
import { tv } from 'tailwind-variants'

import type { DockApp } from './DockApp'
import { DockAppTag } from './DockAppTag'

const styleCard = tv({
  base: `
    flex flex-col items-center gap-1 p-4
    rounded-md text-center min-w-max cursor-pointer
    min-w-24 w-full max-w-36
    relative

    bg-bg-2 hover:bg-bg-3 text-text-muted
    hover:text-text-important hover:ring-1
    hover:ring-border-muted
  `,
})

interface DockAppCardProps {
  dockApp: DockApp
}

export const DockAppCard = ({ dockApp }: DockAppCardProps) => {
  const { icon: Icon, name, tags, url, description } = dockApp
  const navigate = useNavigate()
  const router = useRouter()

  const isBookmarked = tags.includes(DockAppTag.Bookmarked)
  const unavailable = tags.includes(DockAppTag.Disabled) || tags.includes(DockAppTag.Idea)

  const className = styleCard({
    class: unavailable ? 'opacity-50 cursor-not-allowed' : '',
  })

  const handleClick = () => {
    if (unavailable) return
    void navigate(url)
  }

  const handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault()
    if (unavailable) return

    const href = router.buildLocation(url).href
    window.open(href, '_blank', 'noopener,noreferrer')
  }

  return (
    <button
      type='button'
      className={className}
      onClick={handleClick}
      onContextMenu={handleContextMenu}
      title={description}
    >
      {isBookmarked && <BookmarkSimpleIcon size={16} weight='fill' className='text-brand absolute inset-e-2 top-2' />}

      <Icon weight='fill' size={32} />

      <p className='line-clamp-1 text-xs text-ellipsis'>{name}</p>
    </button>
  )
}
