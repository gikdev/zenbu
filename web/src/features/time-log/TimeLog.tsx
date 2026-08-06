import { HouseIcon, PauseIcon, PlayIcon, TrashIcon } from '@phosphor-icons/react'
import { Link } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

import { unwrapOr } from '#/common/helpers/Result'

import { keys, storage, StorageEntry } from '../persistence'
import type { Session } from './Session'
import { useI18nContext } from '../i18n'

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

  const [count, formatted] = (() => {
    const completed = sessions.filter(s => s.endedAt !== null)
    const count = completed.length

    const totalSeconds = completed.reduce((sum, s) => sum + Math.floor(((s.endedAt as number) - s.startedAt) / 1000), 0)
    const hrs = Math.floor(totalSeconds / 3600)
    const mins = Math.floor((totalSeconds % 3600) / 60)
    const secs = totalSeconds % 60
    const formatted = [hrs, mins, secs].map(v => String(v).padStart(2, '0')).join(':')

    return [count, formatted] as const
  })()

  return (
    <div className='flex h-dvh flex-col bg-mist-950 text-mist-400'>
      <button
        className='flex h-3/4 flex-1 cursor-pointer items-center justify-center hover:bg-sky-950/50'
        type='button'
        onClick={toggle}
      >
        <BtnIcon size={64} weight='fill' className='text-sky-400' />
      </button>

      {/* Lower 1/4 – three action buttons */}
      <div className='flex h-1/4 items-stretch'>
        <Link
          to='/apps'
          className='flex flex-1 cursor-pointer items-center justify-center gap-2 transition-colors hover:bg-mist-900 hover:text-mist-100'
        >
          <HouseIcon size={36} weight='bold' />
        </Link>

        <button
          type='button'
          onClick={() => {}}
          className='flex flex-1 cursor-pointer flex-col items-center justify-center gap-2 transition-colors hover:bg-emerald-950/50 hover:text-emerald-400'
        >
          <p>
            <span>{LL.timeLog.totalSessionsLabel()}: </span>
            <span>{count}</span>
          </p>

          <p>
            <span>{LL.timeLog.totalDurationLabel()}: </span>
            <span>{formatted}</span>
          </p>
        </button>

        <button
          type='button'
          onClick={deleteAll}
          className='flex flex-1 cursor-pointer items-center justify-center gap-2 transition-colors hover:bg-red-950/50 hover:text-red-400'
        >
          <TrashIcon size={36} weight='bold' />
        </button>
      </div>
    </div>
  )
}
