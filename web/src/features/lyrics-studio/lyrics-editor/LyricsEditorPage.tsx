import { DownloadSimpleIcon, GearSixIcon, HouseIcon, InfoIcon, PlusIcon, UploadSimpleIcon } from '@phosphor-icons/react'
import { Link } from '@tanstack/react-router'
import { useRef, useState } from 'react'

import { styleBtn } from '#/common/atoms/btn'
import { downloadFile } from '#/common/helpers/downloadFile'
import { AdaptiveDialog } from '#/common/molecules/AdaptiveDialog'
import { PageShell } from '#/common/molecules/PageShell'
import { useI18nContext, useIsRtl } from '#/features/i18n'

import { Lyric } from '../lyric/Lyric'
import { LyricBlockForm } from './LyricBlockForm'
import { LyricBlockItem } from './LyricBlockItem'
import { LyricMetadataCard } from './LyricMetadataCard'
import { LyricMetadataForm } from './LyricMetadataForm'
import { LyricSettingsForm } from './LyricSettingsForm'
import { SectionTitle } from './SectionTitle'

const emptyLyric = new Lyric({
  metadata: {
    // title: { lang: 'ja', text: '結婚行進曲' },
    // title: { lang: 'en', text: 'Kekkon Koushinkyoku' },
    title: { lang: 'en', text: 'Unknown Lyric/Music' },

    // artist: { lang: 'en', text: 'ASOBI Doumei' },
    artist: { lang: 'en', text: '' },

    // source: 'https://animegate.ir/anime/theme/11567',
    source: '',

    // imageUrl: 'https://animegate.ir/storage/anime/images/2024/15164.webp',
    // imageUrl: 'https://aniegate.ir/storage/anime/images/2024/15164.webp',
    imageUrl: '',
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
  const [isEditSettingsOpen, setEditSettingsOpen] = useState(false)
  const [editBlockId, setEditBlockId] = useState<string | null>(null)
  const isEditBlockModalOpen = !!editBlockId
  const blockToEdit = lyric.blocks.find(b => b.id === editBlockId)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDownload = () => {
    // 1. Get JSON string from the lyric instance
    const jsonString = lyric.toJsonString()

    // 2. Create a Blob and a File
    const blob = new Blob([jsonString], { type: 'application/json' })

    // 3. Build a filename from the title (fallback to "lyric")
    const fileName = `${lyric.metadata.title.text}.json`
    const file = new File([blob], fileName, { type: 'application/json' })

    // 4. Trigger download
    downloadFile(file)
  }

  const handleUploadClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = event => {
      try {
        const jsonString = event.target?.result as string
        const newLyricResult = Lyric.create(jsonString)

        if (newLyricResult.isErr()) {
          throw new Error(newLyricResult.error)
        }

        setLyric(newLyricResult.value)
      } catch (err) {
        alert(`Failed to load lyric: ${(err as Error).message}`)
      } finally {
        // Reset input so the same file can be re-uploaded
        if (fileInputRef.current) fileInputRef.current.value = ''
      }
    }
    reader.onerror = () => {
      alert('Failed to read file')
    }
    reader.readAsText(file)
  }

  return (
    <PageShell variants={{ heightFull: 'min' }}>
      <div className='mx-auto w-full max-w-160'>
        <div className='flex items-center justify-between gap-1 px-4 py-2'>
          <Link to='/apps' className={styleBtn({ size: 'icon' })}>
            <HouseIcon mirrored={isRtl} size={20} />
          </Link>

          <h1 className='text-text-important me-auto text-lg font-bold'>{LL.lyricsEditor.title()}</h1>

          <button type='button' className={styleBtn({ size: 'icon' })} onClick={handleUploadClick}>
            <UploadSimpleIcon size={20} />
          </button>

          <input
            type='file'
            accept='.json,application/json'
            ref={fileInputRef}
            onChange={handleFileChange}
            className='hidden'
          />

          <button type='button' className={styleBtn({ size: 'icon' })} onClick={() => setEditMetadataOpen(p => !p)}>
            <InfoIcon size={20} />
          </button>

          <button type='button' className={styleBtn({ size: 'icon' })} onClick={() => setEditSettingsOpen(p => !p)}>
            <GearSixIcon size={20} />
          </button>
        </div>

        <div className='flex flex-1 flex-col gap-4 p-4'>
          <LyricMetadataCard metadata={lyric.metadata} />

          <SectionTitle
            title='Blocks'
            slot={
              <button
                type='button'
                className={styleBtn({ size: 'sm' })}
                onClick={() => {
                  lyric.addEmptyBlock()
                  setLyric(lyric.clone())
                }}
              >
                <PlusIcon size={16} />
                <span>New Block</span>
              </button>
            }
          />

          <div className='flex flex-col gap-8'>
            {lyric.blocks.length === 0 && <p className='text-center'>No blocks here for now.</p>}

            {lyric.blocks.map(b => (
              <LyricBlockItem
                key={b.id}
                block={b}
                onEdit={() => setEditBlockId(b.id)}
                onDelete={() => {
                  const isSure = window.confirm('Sure?')
                  if (!isSure) return
                  lyric.removeBlock(b.id)
                  setLyric(lyric.clone())
                }}
              />
            ))}
          </div>

          <button type='button' className={styleBtn({ variant: 'primary' })} onClick={handleDownload}>
            <DownloadSimpleIcon size={20} />
            <span>Download as file</span>
          </button>
        </div>

        <AdaptiveDialog
          title={`Edit Block #${blockToEdit?.id}`}
          isOpen={isEditBlockModalOpen}
          onClose={() => setEditBlockId(null)}
        >
          <LyricBlockForm
            block={blockToEdit!}
            onSubmit={updatedBlock => {
              lyric.updateBlock(updatedBlock)
              setLyric(lyric.clone())
              setEditBlockId(null)
            }}
          />
        </AdaptiveDialog>

        <AdaptiveDialog title='Settings' isOpen={isEditSettingsOpen} onClose={() => setEditSettingsOpen(false)}>
          <LyricSettingsForm
            settings={lyric.settings}
            onSubmit={settings => {
              lyric.settings = settings
              setLyric(lyric.clone())
              setEditSettingsOpen(false)
            }}
          />
        </AdaptiveDialog>

        <AdaptiveDialog title='Metadata' isOpen={isEditMetadataOpen} onClose={() => setEditMetadataOpen(false)}>
          <LyricMetadataForm
            metadata={lyric.metadata}
            onSubmit={metadata => {
              lyric.metadata = metadata
              setLyric(lyric.clone())
              setEditMetadataOpen(false)
            }}
          />
        </AdaptiveDialog>
      </div>
    </PageShell>
  )
}
