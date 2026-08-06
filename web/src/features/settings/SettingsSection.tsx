import {
  DownloadSimpleIcon,
  InfoIcon,
  LaptopIcon,
  MoonIcon,
  SunIcon,
  TrashSimpleIcon,
  UploadSimpleIcon,
} from '@phosphor-icons/react'

import { styleBtn } from '#/common/atoms/btn'
import { useI18nContext } from '#/features/i18n'
import { themeStore, useCurrentTheme } from '#/features/theming'

export const SettingsSection = () => {
  const { LL, locale, setLocale } = useI18nContext()
  const theme = useCurrentTheme()

  const OPTION_CONTAINER_CLN = 'flex flex-col gap-2'
  const BTNS_CONTAINER_CLN = 'flex items-center gap-2 *:flex-1'

  return (
    <div className='flex flex-col gap-4'>
      <div className='bg-bg-1-info text-text-muted-info flex items-center gap-2 rounded-md p-2'>
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

          <button
            type='button'
            onClick={() => themeStore.actions.set('dark')}
            className={styleBtn({ size: 'lg', variant: theme === 'dark' ? 'primary' : 'outline' })}
          >
            <MoonIcon size={16} />
            <span>{LL.settings.sections.theme.dark()}</span>
          </button>

          <button
            type='button'
            onClick={() => themeStore.actions.set('light')}
            className={styleBtn({ size: 'lg', variant: theme === 'light' ? 'primary' : 'outline' })}
          >
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
  )
}
