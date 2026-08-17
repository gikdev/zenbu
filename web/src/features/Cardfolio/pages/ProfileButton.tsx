import { type Icon, ArrowUpRightIcon } from '@phosphor-icons/react'
import { Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { useState, type ReactNode } from 'react'
import { tv } from 'tailwind-variants'

type LinkTag = 'disabled' | 'new-tab' | 'external'

type LinkIcon = { type: 'icon'; icon: Icon } | { type: 'node'; node: ReactNode }

export type LinkItem = {
  id: string
  title: string
  url: string
  tags: LinkTag[]
  icon: LinkIcon
}

interface ProfileButtonProps {
  item: LinkItem
}

const animationProps = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
  transition: { type: 'spring' as const, stiffness: 400, damping: 17 },
}

const styleBtnBase = tv({
  base: `
    flex w-full items-center gap-3
    rounded-xl bg-white/5 px-5 py-4
    transition-colors hover:bg-white/10
  `,
})

export const ProfileButton = ({ item }: ProfileButtonProps) => {
  const [isHovered, setIsHovered] = useState(false)

  const isDisabled = item.tags.includes('disabled')
  const isExternal = item.tags.includes('external')
  const isNewTab = item.tags.includes('new-tab')

  // ---- Shared content ----
  const iconElement =
    item.icon.type === 'icon' ? (
      <item.icon.icon size={24} weight={isHovered ? 'fill' : 'regular'} className='shrink-0' />
    ) : (
      <span className='shrink-0'>{item.icon.node}</span>
    )

  const content = (
    <>
      <span className='me-auto flex items-center gap-3'>{item.title}</span>

      {isExternal && <ArrowUpRightIcon size={16} className='text-text-muted shrink-0 opacity-60' />}

      {iconElement}
    </>
  )

  if (isDisabled) {
    return (
      <button disabled className={styleBtnBase({ class: 'cursor-not-allowed opacity-50' })}>
        {content}
      </button>
    )
  }

  if (isExternal) {
    return (
      <motion.a
        href={item.url}
        target={isNewTab ? '_blank' : undefined}
        rel={isNewTab ? 'noopener noreferrer' : undefined}
        className='w-full'
        {...animationProps}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={styleBtnBase()}>{content}</div>
      </motion.a>
    )
  }

  return (
    <motion.div
      className='w-full'
      {...animationProps}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={item.url} className='block'>
        <div className={styleBtnBase()}>{content}</div>
      </Link>
    </motion.div>
  )
}
