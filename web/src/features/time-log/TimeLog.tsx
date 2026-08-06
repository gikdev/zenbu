import { HouseIcon, PauseIcon, PlayIcon, TrashIcon } from '@phosphor-icons/react'
import { Link } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

import { styleBtn } from '#/common/atoms/btn'
import { unwrapOr } from '#/common/helpers/Result'

import { useI18nContext } from '../i18n'
import { keys, storage, StorageEntry } from '../persistence'
import type { Session } from './Session'

const timeLogStorage = new StorageEntry<{ sessions: Session[] }>(storage, keys.Apps.TimeLog, {
  sessions: [],
})

const loadSessions = () => unwrapOr(timeLogStorage.load(), data => data.sessions, [])

export function TimeLog() {
  const { LL } = useI18nContext()
  const [sessions, setSessions] = useState<Session[]>(loadSessions)

  const activeSession = sessions.find(s => s.endedAt === null)
  const isRunning = !!activeSession
  const BtnIcon = isRunning ? PauseIcon : PlayIcon

  const { count, formatted } = computeSessionStats(sessions)

  useEffect(() => {
    const result = timeLogStorage.save({ sessions })
    if (!result.ok) console.error(result.error)
  }, [sessions])

  const startNewSession = () => {
    const newSession: Session = { startedAt: Date.now(), endedAt: null }
    const updated = [...sessions, newSession]

    setSessions(updated)
  }

  const endCurrentSession = () => {
    const updated = sessions.map(s => (s.endedAt === null ? { ...s, endedAt: Date.now() } : s))

    setSessions(updated)
  }

  const toggle = () => (isRunning ? endCurrentSession() : startNewSession())

  const deleteAll = () => {
    const isConfirmed = window.confirm(LL.timeLog.clearSessionsConfirm())
    if (!isConfirmed) return

    setSessions([])
  }

  return (
    <div className='flex h-dvh flex-col items-center justify-center'>
      <title>{LL.timeLog.title()}</title>

      <div className='sm:bg-bg-2/50 sm:border-border-muted/50 flex w-full max-w-80 flex-col items-center justify-center gap-8 rounded-lg p-8 sm:border'>
        <button
          onClick={toggle}
          type='button'
          className={styleBtn({
            variant: 'primary',
            size: 'icon-lg',
            class: 'h-48 w-48 rounded-full',
          })}
        >
          <BtnIcon size={64} weight='fill' />
        </button>

        <div className='flex w-full flex-col items-center justify-between gap-4 sm:flex-row'>
          <p className='flex flex-col items-center sm:items-start'>
            <span className='text-text-important text-3xl font-bold'>{count}</span>
            <span className=''>{LL.timeLog.totalSessions()}</span>
          </p>

          <p className='flex flex-col items-center sm:items-end'>
            <span className='text-text-important text-3xl font-bold'>{formatted}</span>
            <span className=''>{LL.timeLog.totalDuration()}</span>
          </p>
        </div>

        <div className='flex w-full flex-col items-center gap-2 *:w-full sm:flex-row sm:*:w-auto sm:*:flex-1'>
          <Link to='/apps' className={styleBtn({ variant: 'outline', size: 'lg' })}>
            <HouseIcon size={20} />
            <span>{LL.timeLog.goHome()}</span>
          </Link>

          <button type='button' onClick={deleteAll} className={styleBtn({ variant: 'destructive', size: 'lg' })}>
            <TrashIcon size={20} weight='bold' />
            <span>{LL.timeLog.reset()}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

function computeSessionStats(sessions: Session[]) {
  const completed = sessions.filter((s): s is Session & { endedAt: number } => s.endedAt !== null)
  const count = completed.length

  const totalSeconds = completed.reduce((sum, s) => sum + Math.floor((s.endedAt - s.startedAt) / 1000), 0)

  const hrs = Math.floor(totalSeconds / 3600)
  const mins = Math.floor((totalSeconds % 3600) / 60)
  const secs = totalSeconds % 60

  const formatted = [hrs, mins, secs].map(v => String(v).padStart(2, '0')).join(':')

  return { count, formatted }
}
