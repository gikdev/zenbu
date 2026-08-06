import { DownloadSimpleIcon, MoonIcon, SunIcon, TrashSimpleIcon } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'

import { styleBtn } from '#/common/atoms/btn'
import { unwrapOr } from '#/common/helpers/Result'
import { useI18nContext } from '#/features/i18n'
import { useCurrentTheme, themeStore } from '#/features/theming'

import { keys, storage, StorageEntry } from './persistence'

const writingAreaStorage = new StorageEntry<{ content: string }>(storage, keys.Apps.WritingArea, {
  content: '',
})

const loadContent = () => unwrapOr(writingAreaStorage.load(), data => data.content, '')

export function WritingArea() {
  const { LL, locale, setLocale } = useI18nContext()
  const theme = useCurrentTheme()
  const [content, setContent] = useState(loadContent)

  useEffect(() => {
    const result = writingAreaStorage.save({ content })
    if (!result.ok) console.error(result.error)
  }, [content])

  const handleDownload = () => {
    const now = new Date()
    const pad = (n: number) => n.toString().padStart(2, '0')
    const defaultName = `note-${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}-${pad(now.getHours())}-${pad(now.getMinutes())}-${pad(now.getSeconds())}.txt`
    const filename = window.prompt('File name:', defaultName)
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
    if (!window.confirm('Clear all content?')) return
    setContent('')
  }

  return (
    <div className='flex h-dvh flex-col'>
      <title>{LL.writingArea.title()}</title>

      <div className='flex items-center justify-between px-4 py-2'>
        <h1 className='text-lg font-bold tracking-wide'>{LL.writingArea.title()}</h1>

        <div className='flex items-center gap-1'>
          <button
            type='button'
            onClick={() => setLocale('fa')}
            className={styleBtn({ size: 'icon', variant: locale === 'fa' ? 'primary' : 'outline' })}
          >
            <span>فا</span>
          </button>

          <button
            type='button'
            onClick={() => setLocale('en')}
            className={styleBtn({ size: 'icon', variant: locale === 'en' ? 'primary' : 'outline' })}
          >
            <span>EN</span>
          </button>

          <button
            type='button'
            onClick={() => setLocale('ja')}
            className={styleBtn({ size: 'icon', variant: locale === 'ja' ? 'primary' : 'outline' })}
          >
            <span>日本</span>
          </button>

          <button
            type='button'
            onClick={() => themeStore.actions.set(theme === 'dark' ? 'light' : 'dark')}
            className={styleBtn({ size: 'icon' })}
          >
            {theme === 'dark' && <MoonIcon size={20} />}
            {theme === 'light' && <SunIcon size={20} />}
          </button>

          <button type='button' onClick={handleDownload} className={styleBtn({ size: 'icon' })}>
            <DownloadSimpleIcon size={18} />
          </button>

          <button onClick={handleReset} type='button' className={styleBtn({ size: 'icon', variant: 'destructive' })}>
            <TrashSimpleIcon size={18} />
          </button>
        </div>
      </div>

      <textarea
        dir='auto'
        value={content}
        onChange={e => setContent(e.target.value)}
        placeholder='...'
        className='w-full flex-1 resize-none px-4 py-4 outline-none'
      />
    </div>
  )
}
