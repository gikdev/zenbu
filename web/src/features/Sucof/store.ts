import { createStore, useSelector } from '@tanstack/react-store'

import { storage } from '../persistence'
import { keys } from '../persistence/keys'
import { StorageEntry } from '../persistence/StorageEntry'
import { FocusSession, type IFocusSession } from './FocusSession'

interface SucofStoreShape {
  sessions: IFocusSession[]
}

const emptyState: SucofStoreShape = {
  sessions: [],
}

export const sucofStorage = new StorageEntry<SucofStoreShape>(storage, keys.Apps.Sucof, emptyState)

const loaded = sucofStorage.load()
const initialState = loaded.isOk() ? loaded.value : emptyState

export const sucofStore = createStore(initialState, ({ setState }) => ({
  addManualSession: (duration: number) =>
    setState(s => ({
      sessions: [...s.sessions, FocusSession.createNewManual(duration)],
    })),

  startTimedSession: () =>
    setState(s => ({
      sessions: [...s.sessions, FocusSession.createNewTimed(null)],
    })),

  setTimedSessionEnd: (id: string, endAt: string) =>
    setState(s => ({
      sessions: s.sessions.map(session =>
        session.id === id ? new FocusSession(session).changeEndAt(endAt).clone() : session,
      ),
    })),

  reset: () => setState(() => emptyState),
}))

sucofStore.subscribe(() => {
  const state = sucofStore.state
  const result = sucofStorage.save(state)

  if (result.isErr()) {
    console.error('Failed to save Sucof sessions:', result.error)
  }
})

const totalMinutesSelector = (s: SucofStoreShape): number =>
  s.sessions.map(s => new FocusSession(s).getDurationInMinutes() ?? 0).reduce((a, b) => a + b, 0)

export const useTotalMinutes = () => useSelector(sucofStore, totalMinutesSelector)
