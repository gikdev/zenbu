import {
  DownloadSimpleIcon,
  InfoIcon,
  LaptopIcon,
  MoonIcon,
  SunIcon,
  TrashSimpleIcon,
  UploadSimpleIcon,
} from '@phosphor-icons/react'
import { useSelector } from '@tanstack/react-store'

import { styleBtn } from '#/common/atoms/btn'
import { AdaptiveDialog } from '#/common/molecules/AdaptiveDialog'

import { useI18nContext } from '../i18n/i18n-react'
import { settingsStore } from './store'

export const SettingsDialog = () => {
  const { LL, locale, setLocale } = useI18nContext()
  const isModalOpen = useSelector(settingsStore, s => s.isModalOpen)
  const OPTION_CONTAINER_CLN = 'flex flex-col gap-2'
  const BTNS_CONTAINER_CLN = 'flex items-center gap-2 *:flex-1'

  return (
    <AdaptiveDialog isOpen={isModalOpen} onClose={settingsStore.actions.close} title={LL.settings.title()}>
      <div className='flex flex-col gap-4'>
        <div className='flex items-center gap-2 rounded-md bg-blue-950 p-2 text-blue-400'>
          <InfoIcon size={20} weight='fill' />
          <span>{LL.settings.wipNote()}</span>
        </div>

        <div className={OPTION_CONTAINER_CLN}>
          <p>{LL.settings.sections.language.title()}</p>

          <div className={BTNS_CONTAINER_CLN}>
            <button
              type='button'
              className={styleBtn({ size: 'lg', variant: locale === 'en' ? 'primary' : 'outline' })}
              onClick={() => setLocale('en')}
            >
              <span>English</span>
            </button>

            <button
              type='button'
              className={styleBtn({ size: 'lg', variant: locale === 'fa' ? 'primary' : 'outline' })}
              onClick={() => setLocale('fa')}
            >
              <span>فارسی</span>
            </button>

            <button
              type='button'
              className={styleBtn({ size: 'lg', variant: locale === 'ja' ? 'primary' : 'outline' })}
              onClick={() => setLocale('ja')}
            >
              <span>日本語</span>
            </button>
          </div>
        </div>

        <div className={OPTION_CONTAINER_CLN}>
          <p className='opacity-50'>{LL.settings.sections.theme.title()}</p>

          <div className={BTNS_CONTAINER_CLN}>
            <button type='button' disabled className={styleBtn({ size: 'lg', variant: 'outline' })}>
              <LaptopIcon size={16} />
              <span>{LL.settings.sections.theme.auto()}</span>
            </button>

            <button type='button' disabled className={styleBtn({ size: 'lg', variant: 'primary' })}>
              <MoonIcon size={16} />
              <span>{LL.settings.sections.theme.dark()}</span>
            </button>

            <button type='button' disabled className={styleBtn({ size: 'lg', variant: 'outline' })}>
              <SunIcon size={16} />
              <span>{LL.settings.sections.theme.light()}</span>
            </button>
          </div>
        </div>

        <div className={OPTION_CONTAINER_CLN}>
          <p className='opacity-50'>{LL.settings.sections.data.title()}</p>

          <div className={BTNS_CONTAINER_CLN}>
            <button type='button' disabled className={styleBtn({ size: 'lg', variant: 'outline' })}>
              <UploadSimpleIcon size={16} />
              <span>{LL.settings.sections.data.import()}</span>
            </button>

            <button type='button' disabled className={styleBtn({ size: 'lg', variant: 'outline' })}>
              <DownloadSimpleIcon size={16} />
              <span>{LL.settings.sections.data.export()}</span>
            </button>

            <button type='button' disabled className={styleBtn({ size: 'lg', variant: 'destructive' })}>
              <TrashSimpleIcon size={16} />
              <span>{LL.settings.sections.data.reset()}</span>
            </button>
          </div>
        </div>
      </div>
    </AdaptiveDialog>
  )
}
