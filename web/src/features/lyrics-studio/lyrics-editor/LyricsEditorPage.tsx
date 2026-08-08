import { CaretDownIcon, HouseIcon, PencilSimpleIcon, PlusIcon, TrashSimpleIcon } from '@phosphor-icons/react'
import { Link } from '@tanstack/react-router'
import { useState } from 'react'

import { styleBtn } from '#/common/atoms/btn'
import { Show } from '#/common/helpers/Show'
import { PageShell } from '#/common/molecules/PageShell'
import { useI18nContext, useIsRtl } from '#/features/i18n'

import { TimeFormatter } from '../helpers/TimeFormatter'
import { Lyric } from '../lyric/Lyric'
import { LyricBlockItem } from './LyricBlockItem'
import { LyricMetadataCard } from './LyricMetadataCard'
import { LyricMetadataForm } from './LyricMetadataForm'
import { LyricSettingsForm } from './LyricSettingsForm'
import { SectionTitle } from './SectionTitle'

const emptyLyric = new Lyric({
  metadata: {
    // title: { lang: 'ja', text: '結婚行進曲' },
    title: { lang: 'en', text: 'Kekkon Koushinkyoku' },

    artist: { lang: 'en', text: 'ASOBI Doumei' },
    // artist: null,

    source: 'https://animegate.ir/anime/theme/11567',
    // source: null,

    imageUrl: 'https://animegate.ir/storage/anime/images/2024/15164.webp',
    // imageUrl: 'https://aniegate.ir/storage/anime/images/2024/15164.webp',
    // imageUrl: null,
  },
  settings: {
    defaultLanguage: 'en',
  },
  blocks: [],
})

export const LyricsEditorPage = () => {
  const { LL } = useI18nContext()
  const isRtl = useIsRtl()
  const [lyric, setLyric] = useState<Lyric>(emptyLyric)
  const [isEditMetadataOpen, setEditMetadataOpen] = useState(false)

  return (
    <PageShell variants={{ heightFull: 'min' }}>
      <div className='mx-auto w-full max-w-160'>
        <div className='flex items-center justify-between px-4 py-2'>
          <div className='flex items-center gap-2'>
            <Link to='/apps' className={styleBtn({ size: 'icon' })}>
              <HouseIcon mirrored={isRtl} size={20} />
            </Link>

            <h1 className='text-text-important text-lg font-bold'>{LL.lyricsEditor.title()}</h1>
          </div>
        </div>

        <div className='flex flex-1 flex-col gap-4 p-4'>
          <SectionTitle title='Metadata' />

          <LyricMetadataCard
            metadata={lyric.metadata}
            isEditing={isEditMetadataOpen}
            onEdit={() => setEditMetadataOpen(p => !p)}
          />

          <Show if={isEditMetadataOpen}>
            <LyricMetadataForm
              metadata={lyric.metadata}
              onSubmit={metadata => {
                lyric.metadata = metadata
                setLyric(lyric.clone())
              }}
            />
          </Show>

          <SectionTitle title='Settings' />

          <LyricSettingsForm
            settings={lyric.settings}
            onSubmit={settings => {
              lyric.settings = settings
              setLyric(lyric.clone())
            }}
          />

          <SectionTitle title='Blocks' />

          {lyric.blocks.map(b => (
            <LyricBlockItem
              key={b.id}
              block={b}
              onEdit={() => {
                /* open edit modal */
              }}
              onDelete={() => {
                const isSure = window.confirm('Sure?')
                if (!isSure) return
                lyric.removeBlock(b.id)
                setLyric(lyric.clone())
              }}
            />
          ))}

          <button
            type='button'
            className={styleBtn({ variant: 'outline' })}
            onClick={() => {
              lyric.addEmptyBlock()
              setLyric(lyric.clone())
            }}
          >
            <PlusIcon size={20} />
            <span>Add Empty Block</span>
          </button>
        </div>
      </div>
    </PageShell>
  )
}
