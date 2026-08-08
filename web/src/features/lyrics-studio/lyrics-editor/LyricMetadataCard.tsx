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
    <div className='flex flex-col items-center gap-2 text-center'>
      <div className='bg-bg-2 flex aspect-square w-full max-w-40 items-center justify-center overflow-hidden rounded-md'>
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

      {/* Title */}
      <p className='text-text-important text-2xl font-bold'>
        <span className='use-lang-font' lang={title.lang}>
          {title.text}
        </span>
      </p>

      {/* Artist and Source */}
      <p className='flex items-center gap-2'>
        <span>
          {artist?.text ? (
            <span className='use-lang-font' lang={artist.lang}>
              {artist.text}
            </span>
          ) : (
            <span>(Unknown Artist)</span>
          )}
        </span>

        <span>-</span>

        <span>
          {source ? (
            <a className='hover:text-brand underline' target='_blank' href={source}>
              Source
            </a>
          ) : (
            <span>(No Source)</span>
          )}
        </span>
      </p>
    </div>
  )
}
