import { LinkSimpleIcon } from '@phosphor-icons/react'

import { styleBtn } from '#/common/atoms/btn'

import type { Anime } from './Anime'

export const AnimeCard = (p: { anime: Anime }) => {
  const { imageUrl, title, url, tags, description } = p.anime

  return (
    <div className='border-border-muted/50 bg-bg-1 flex flex-col gap-4 rounded-xl border p-4 sm:flex-row sm:items-start'>
      {/* Thumbnail Image */}
      <img src={imageUrl} alt={title} className='h-48 w-32 shrink-0 rounded object-cover' loading='lazy' />

      {/* Content */}
      <div className='flex flex-1 flex-col gap-4'>
        <h3 className='text-text-important text-xl font-bold'>{title}</h3>

        {/* Notes as Badges */}
        {tags.length > 0 && (
          <div className='flex flex-wrap gap-1'>
            {tags.map(tag => (
              <span key={tag} className='bg-brand/10 text-brand rounded-full px-2 py-1 text-xs'>
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Description */}
        <p className=''>{description}</p>

        <div className='hidden h-full flex-1 sm:flex'>&nbsp;</div>

        {/* CTA Button */}
        <a
          href={url}
          target='_blank'
          rel='noopener noreferrer'
          className={styleBtn({ variant: 'primary', class: 'sm:self-end' })}
        >
          <LinkSimpleIcon size={20} weight='bold' />
          <span>مشاهده انیمه</span>
        </a>
      </div>
    </div>
  )
}
