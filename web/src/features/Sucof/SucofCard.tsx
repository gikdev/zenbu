import {
  TrashSimpleIcon,
  TimerIcon,
  StopCircleIcon,
  HouseIcon,
  PlusIcon,
  ClockCounterClockwiseIcon,
} from '@phosphor-icons/react'
import { Link } from '@tanstack/react-router'
import { useSelector } from '@tanstack/react-store'
import { useState } from 'react'

import { styleBtn } from '#/common/atoms/btn'
import { AdaptiveDialog } from '#/common/molecules/AdaptiveDialog'

import { useI18nContext } from '../i18n'
import { FocusSession, type IFocusSession } from './FocusSession'
import { formatTotalMinutes } from './formatTotalMinutes'
import { sucofStore, useTotalMinutes } from './store'

export function SucofCard() {
  const { LL } = useI18nContext()
  const [showHistory, setShowHistory] = useState(false)

  const totalMinutes = useTotalMinutes()
  const sessions = useSelector(sucofStore, s => s.sessions)

  const activeTimedSession = sessions.find(s => s.duration.type === 'timed' && s.duration.endAt === null)
  const isRunning = !!activeTimedSession

  const toggleTimed = () => {
    if (isRunning) {
      sucofStore.actions.setTimedSessionEnd(activeTimedSession.id, new Date().toISOString())
    } else {
      sucofStore.actions.startTimedSession()
    }
  }

  const onAddManual = () => {
    const input = window.prompt(LL.sucof.promptManualMinutes(), '')
    if (!input) return

    const val = Number.parseInt(input, 10)

    if (Number.isNaN(val)) {
      alert(LL.sucof.invalidMinutes())

      return
    }

    sucofStore.actions.addManualSession(val)
  }

  const onReset = () => {
    if (!window.confirm(LL.sucof.confirmReset())) return
    sucofStore.actions.reset()
  }

  return (
    <div className='sm:bg-bg-2/50 sm:border-border-muted/50 flex w-full max-w-80 flex-col items-center justify-center gap-8 rounded-lg p-8 sm:border'>
      <AdaptiveDialog isOpen={showHistory} title={LL.sucof.history()} onClose={() => setShowHistory(false)}>
        <div className='flex flex-col gap-2'>
          {sessions.length ? (
            sessions.map(session => <SessionRecord key={session.id} session={session} />)
          ) : (
            <code className='text-center'>¯\_(ツ)_/¯</code>
          )}
        </div>
      </AdaptiveDialog>

      <p className='text-center text-4xl font-black uppercase'>{LL.sucof.title()}</p>

      <div className='flex overflow-clip rounded-2xl'>
        <button
          type='button'
          onClick={toggleTimed}
          className={styleBtn({
            variant: 'primary',
            size: 'icon-lg',
            class: 'h-48 w-32 rounded-none',
          })}
        >
          {isRunning ? <StopCircleIcon size={64} weight='fill' /> : <TimerIcon size={64} weight='fill' />}
        </button>

        <button
          type='button'
          onClick={onAddManual}
          className={styleBtn({
            variant: 'secondary',
            size: 'icon-lg',
            class: 'h-48 w-16 rounded-none',
          })}
        >
          <PlusIcon size={24} />
        </button>
      </div>

      <p className='flex flex-col items-center text-center'>
        <span className='text-text-important text-3xl font-bold'>{formatTotalMinutes(totalMinutes)}</span>
        <span>{LL.sucof.totalMinutes()}</span>
      </p>

      <div className='flex w-full gap-2 *:flex-1'>
        <Link to='/apps' className={styleBtn({ variant: 'outline' })}>
          <HouseIcon size={20} />
        </Link>

        <button onClick={() => setShowHistory(true)} className={styleBtn({ variant: 'outline' })} type='button'>
          <ClockCounterClockwiseIcon size={20} />
        </button>

        <button onClick={onReset} className={styleBtn({ variant: 'destructive' })} type='button'>
          <TrashSimpleIcon size={20} />
        </button>
      </div>
    </div>
  )
}

const SessionRecord = (p: { session: IFocusSession }) => (
  <p className='flex items-center justify-between'>
    <code className='text-text-important text-2xl font-bold'>
      {formatTotalMinutes(new FocusSession(p.session).getDurationInMinutes() ?? 0)}
    </code>

    <code className='text-xs'>{p.session.duration.type}</code>
  </p>
)
