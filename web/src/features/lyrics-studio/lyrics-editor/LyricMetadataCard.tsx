import { ImageBrokenIcon, ImageSquareIcon } from '@phosphor-icons/react'
import { useState, useEffect } from 'react'

import type { LyricMetadata } from '../lyric/LyricMetadata'

export const LyricMetadataCard = (p: { metadata: LyricMetadata }) => {
  const { artist, imageUrl, source, title } = p.metadata

  const [imageState, setImageState] = useState<'missing' | 'error' | 'displaying'>(
    imageUrl?.trim() ? 'displaying' : 'missing',
  )
  const showImage = imageState === 'displaying'

  useEffect(() => {
    setImageState(imageUrl?.trim() ? 'displaying' : 'missing')
  }, [imageUrl])

  const handleImageError = () => setImageState('error')

  return (
    <div className='flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:gap-6'>
      {/* Image - fixed size on desktop, full width on mobile */}
      <div className='bg-bg-2 flex aspect-square w-full max-w-40 shrink-0 items-center justify-center overflow-hidden rounded-md sm:w-24 md:w-24'>
        {showImage ? (
          <img
            className='h-full w-full object-cover'
            src={imageUrl || ''}
            alt={title.text}
            onError={handleImageError}
          />
        ) : (
          <span className='text-text-muted select-none'>
            {imageState === 'error' && <ImageBrokenIcon size={40} />}
            {imageState === 'missing' && <ImageSquareIcon size={40} />}
          </span>
        )}
      </div>

      {/* Text info - stacked vertically, centered on mobile, left-aligned on desktop */}
      <div className='flex flex-col items-center gap-1 text-center sm:items-start sm:text-left'>
        {/* Title */}
        <p className='text-text-important text-2xl font-bold'>
          <span className='use-lang-font' lang={title.lang}>
            {title.text}
          </span>
        </p>

        {/* Artist and Source */}
        <p className='flex items-center gap-2 text-sm sm:text-base'>
          <span>
            {artist?.text ? (
              <span className='use-lang-font' lang={artist.lang}>
                {artist.text}
              </span>
            ) : (
              <span className='text-text-muted'>(Unknown Artist)</span>
            )}
          </span>

          <span className='text-text-muted'>•</span>

          <span>
            {source ? (
              <a
                className='hover:text-brand text-brand underline transition-colors'
                target='_blank'
                href={source}
                rel='noreferrer'
              >
                Source
              </a>
            ) : (
              <span className='text-text-muted'>(No Source)</span>
            )}
          </span>
        </p>
      </div>
    </div>
  )
}
