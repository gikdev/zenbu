import { version } from '#/App/configs/version.json'
import { useI18nContext } from '#/features/i18n'

import { AppShortcutsSection } from './AppShortcutsSection'

export function AppShortcutsPage() {
  const { LL } = useI18nContext()

  return (
    <div className='mx-auto flex min-h-dvh max-w-240 flex-col items-center justify-center gap-8 px-2 py-8'>
      <div className='flex flex-row items-center gap-2'>
        <img className='size-12' src='/zenbu.svg' alt='' />

        <p className='text-text-important text-3xl font-bold'>{LL.welcome.title()}</p>

        <code className='text-xs'>v{version}</code>
      </div>

      <AppShortcutsSection />
    </div>
  )
}
