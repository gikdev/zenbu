import { CaretDownIcon, CaretUpIcon, PencilSimpleIcon, TrashSimpleIcon } from '@phosphor-icons/react'
import { useState } from 'react'

import { styleBtn } from '#/common/atoms/btn'
import { Show } from '#/common/helpers/Show'

import { TimeFormatter } from '../helpers/TimeFormatter'
import type { LyricBlock } from '../lyric/Lyric'

interface LyricBlockItemProps {
  block: LyricBlock
  onEdit: () => void
  onDelete: () => void
}

export const LyricBlockItem = (p: LyricBlockItemProps) => {
  const { ar, en, id, endTimestamp, es, fa, ja, rj, tx, defaultLanguageOverride } = p.block
  const [isDetailsOpen, setDetailsOpen] = useState(true)

  return (
    <div>
      <p className='flex items-center gap-1'>
        <span className='me-auto'>
          <span className='opacity-50'>#</span>
          <span className='text-text-important'>{id}</span>
        </span>

        <code className='text-xs'>
          <span className='opacity-50'>[</span>
          <span>{TimeFormatter.formatSeconds(endTimestamp)}</span>
          <span className='opacity-50'>]</span>
          <span>&nbsp;</span>
          <span className='opacity-50'>(</span>
          <span>{defaultLanguageOverride || '-'}</span>
          <span className='opacity-50'>)</span>
        </code>

        <button type='button' className={styleBtn({ size: 'icon' })} onClick={() => setDetailsOpen(p => !p)}>
          {isDetailsOpen ? <CaretUpIcon size={20} /> : <CaretDownIcon size={20} />}
        </button>

        <button type='button' className={styleBtn({ size: 'icon' })} onClick={p.onEdit}>
          <PencilSimpleIcon size={20} />
        </button>

        <button type='button' className={styleBtn({ size: 'icon' })} onClick={p.onDelete}>
          <TrashSimpleIcon size={20} />
        </button>
      </p>

      <Show if={isDetailsOpen}>
        <div className='bg-bg-2 flex flex-col gap-4 rounded-md p-2'>
          <Show if={!!ar}>
            <div className='flex flex-col gap-1'>
              <p className='text-xs opacity-50'>Arabic</p>
              <p className='use-lang-font' lang='ar' dir='auto'>
                {ar}
              </p>
            </div>
          </Show>

          <Show if={!!en}>
            <div className='flex flex-col gap-1'>
              <p className='text-xs opacity-50'>English</p>
              <p className='use-lang-font' lang='en' dir='auto'>
                {en}
              </p>
            </div>
          </Show>

          <Show if={!!es}>
            <div className='flex flex-col gap-1'>
              <p className='text-xs opacity-50'>Spanish</p>
              <p className='use-lang-font' lang='es' dir='auto'>
                {es}
              </p>
            </div>
          </Show>

          <Show if={!!fa}>
            <div className='flex flex-col gap-1'>
              <p className='text-xs opacity-50'>Persian</p>
              <p className='use-lang-font' lang='fa' dir='auto'>
                {fa}
              </p>
            </div>
          </Show>

          <Show if={!!ja}>
            <div className='flex flex-col gap-1'>
              <p className='text-xs opacity-50'>Japanese</p>
              <p className='use-lang-font' lang='ja' dir='auto'>
                {ja}
              </p>
            </div>
          </Show>

          <Show if={!!rj}>
            <div className='flex flex-col gap-1'>
              <p className='text-xs opacity-50'>Romaji</p>
              <p className='use-lang-font' lang='en' dir='auto'>
                {rj}
              </p>
            </div>
          </Show>

          <Show if={!!tx}>
            <div className='flex flex-col gap-1'>
              <p className='text-xs opacity-50'>Text</p>
              <p className='use-lang-font' lang='en' dir='auto'>
                {tx}
              </p>
            </div>
          </Show>
        </div>
      </Show>
    </div>
  )
}
