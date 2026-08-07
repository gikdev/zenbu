import {
  ArrowLeftIcon,
  DotsThreeVerticalIcon,
  DownloadSimpleIcon,
  MoonIcon,
  SunIcon,
  TextAlignLeftIcon,
  TrashSimpleIcon,
} from '@phosphor-icons/react'
import { Link } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

import { styleBtn } from '#/common/atoms/btn'
import { styleInput } from '#/common/atoms/input'
import { AdaptiveDialog } from '#/common/molecules/AdaptiveDialog'
import { PageShell } from '#/common/molecules/PageShell'
import { useI18nContext, useIsRtl, type Locales } from '#/features/i18n'
import { useCurrentTheme, themeStore } from '#/features/theming'

import { keys, storage, StorageEntry } from './persistence'

const writingAreaStorage = new StorageEntry<{ content: string }>(storage, keys.Apps.WritingArea, {
  content: '',
})

const loadContent = (): string =>
  writingAreaStorage.load().match(
    data => data.content,
    () => '',
  )

export function WritingArea() {
  const { LL, locale, setLocale } = useI18nContext()
  const theme = useCurrentTheme()
  const isRtl = useIsRtl()
  const [isMoreDialogOpen, setMoreDialogOpen] = useState(false)
  const [content, setContent] = useState(loadContent)
  const [wrapEnabled, setWrapEnabled] = useState(true)

  useEffect(() => {
    const result = writingAreaStorage.save({ content })
    if (result.isErr()) console.error(result.error)
  }, [content])

  const handleDownload = () => {
    const now = new Date()
    const pad = (n: number) => n.toString().padStart(2, '0')
    const defaultName = `note-${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}-${pad(now.getHours())}-${pad(now.getMinutes())}-${pad(now.getSeconds())}.txt`
    const filename = window.prompt(LL.writingArea.fileNamePrompt(), defaultName)
    if (!filename) return

    const blob = new Blob([content], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const handleReset = () => {
    const isConfirmed = window.confirm(LL.writingArea.clearConfirm())
    if (!isConfirmed) return

    setContent('')
  }

  return (
    <PageShell variants={{ heightFull: 'max' }}>
      <title>{LL.writingArea.title()}</title>

      <div className='flex items-center justify-between px-4 py-2'>
        <div className='flex items-center gap-1'>
          <Link to='/apps' className={styleBtn({ size: 'icon' })}>
            <ArrowLeftIcon mirrored={isRtl} size={20} />
          </Link>

          <h1 className='text-text-important text-lg font-bold tracking-wide'>{LL.writingArea.title()}</h1>
        </div>

        <button
          type='button'
          onClick={() => setMoreDialogOpen(true)}
          className={styleBtn({ size: 'icon', variant: 'outline', class: 'sm:hidden' })}
        >
          <DotsThreeVerticalIcon size={20} />
        </button>

        <div className='hidden items-center gap-1 sm:flex'>
          <select className={styleInput({})} value={locale} onChange={e => setLocale(e.target.value as Locales)}>
            <option value='en'>English</option>
            <option value='fa'>فارسی</option>
            <option value='ja'>日本語</option>
          </select>

          <button
            type='button'
            onClick={() => themeStore.actions.set(theme === 'dark' ? 'light' : 'dark')}
            className={styleBtn({ size: 'icon' })}
            title={LL.writingArea.toggleTheme()}
          >
            {theme === 'dark' && <MoonIcon size={20} />}
            {theme === 'light' && <SunIcon size={20} />}
          </button>

          <button
            type='button'
            onClick={() => setWrapEnabled(p => !p)}
            title={LL.writingArea.toggleLineWrap()}
            className={styleBtn({ size: 'icon', variant: wrapEnabled ? 'primary' : 'outline' })}
          >
            <TextAlignLeftIcon size={20} />
          </button>

          <button
            type='button'
            onClick={handleDownload}
            title={LL.writingArea.downloadAsFile()}
            className={styleBtn({ size: 'icon' })}
          >
            <DownloadSimpleIcon size={18} />
          </button>

          <button
            onClick={handleReset}
            title={LL.writingArea.removeEverything()}
            type='button'
            className={styleBtn({ size: 'icon', variant: 'destructive' })}
          >
            <TrashSimpleIcon size={18} />
          </button>
        </div>
      </div>

      <AdaptiveDialog
        title={LL.writingArea.moreOptionsDialogTitle()}
        isOpen={isMoreDialogOpen}
        onClose={() => setMoreDialogOpen(false)}
      >
        <div className='flex flex-col gap-2'>
          <select className={styleInput({})} value={locale} onChange={e => setLocale(e.target.value as Locales)}>
            <option value='en'>English</option>
            <option value='fa'>فارسی</option>
            <option value='ja'>日本語</option>
          </select>

          <button
            type='button'
            onClick={() => themeStore.actions.set(theme === 'dark' ? 'light' : 'dark')}
            className={styleBtn()}
          >
            {theme === 'dark' && <MoonIcon size={20} />}
            {theme === 'light' && <SunIcon size={20} />}
            <span>{LL.writingArea.toggleTheme()}</span>
          </button>

          <button
            type='button'
            onClick={() => setWrapEnabled(p => !p)}
            className={styleBtn({ variant: wrapEnabled ? 'primary' : 'outline' })}
          >
            <TextAlignLeftIcon size={20} />
            <span>{LL.writingArea.toggleLineWrap()}</span>
          </button>

          <button type='button' onClick={handleDownload} className={styleBtn({})}>
            <DownloadSimpleIcon size={20} />
            <span>{LL.writingArea.downloadAsFile()}</span>
          </button>

          <button type='button' onClick={handleReset} className={styleBtn({ variant: 'destructive' })}>
            <TrashSimpleIcon size={20} />
            <span>{LL.writingArea.removeEverything()}</span>
          </button>
        </div>
      </AdaptiveDialog>

      <textarea
        dir='auto'
        value={content}
        onChange={e => setContent(e.target.value)}
        placeholder={LL.writingArea.placeholder()}
        wrap={wrapEnabled ? 'soft' : 'off'}
        className='w-full flex-1 resize-none px-4 py-4 outline-none'
      />
    </PageShell>
  )
}
