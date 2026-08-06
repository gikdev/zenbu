import { TimeLog } from '#/features/time-log'

import { useI18nContext } from '../i18n'

export const TimeLogPage = () => {
  const { LL } = useI18nContext()

  return (
    <div className='flex h-dvh flex-col items-center justify-center'>
      <title>{LL.timeLog.title()}</title>

      <TimeLog />
    </div>
  )
}
