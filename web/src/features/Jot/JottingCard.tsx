import { PencilSimpleIcon, TrashSimpleIcon } from '@phosphor-icons/react'

import { styleBtn } from '#/common/atoms/btn'
import { type JottingResponse } from '#/features/api/client'

type JottingCardProps = {
  jotting: JottingResponse
  onEditClick: () => void
  onDeleteClick: () => void
}

export function JottingCard(p: JottingCardProps) {
  return (
    <div className='border-border-muted bg-bg-2 group relative flex flex-col items-center gap-2 rounded-lg border-none p-4 transition-all'>
      <button
        type='button'
        onClick={p.onEditClick}
        className={styleBtn({
          size: 'icon',
          class: 'absolute inset-e-4 top-[50%] translate-y-[-50%] opacity-0 group-hover:opacity-100 transition-all',
        })}
      >
        <PencilSimpleIcon size={24} />
      </button>

      <button
        type='button'
        onClick={p.onDeleteClick}
        className={styleBtn({
          size: 'icon',
          class: 'absolute inset-s-4 top-[50%] translate-y-[-50%] opacity-0 group-hover:opacity-100 transition-all',
        })}
      >
        <TrashSimpleIcon size={24} />
      </button>

      <p className='text-text-important text-2xl font-bold'>{p.jotting.content}</p>

      <p className=''>{p.jotting.title}</p>

      {/* TODO: Show update, in a proper format. */}
      {/* <p className='text-xs opacity-50 transition-all hover:opacity-100'>{p.jotting.updatedAt}</p> */}
    </div>
  )
}
