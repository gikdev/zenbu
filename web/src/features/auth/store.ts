import { createStore, useSelector } from '@tanstack/react-store'

import { storage } from '../persistence'
import { keys } from '../persistence/keys'
import { StorageEntry } from '../persistence/StorageEntry'

interface AuthTokens {
  accessToken: string
  refreshToken: string
  expiresAt: string
}

interface AuthStoreShape {
  tokens: AuthTokens | null
}

const emptyState: AuthStoreShape = {
  tokens: null,
}

export const authStorage = new StorageEntry<AuthStoreShape>(storage, keys.Auth, emptyState)

const loaded = authStorage.load()
const initialState = loaded.isOk() ? loaded.value : emptyState

export const authStore = createStore(initialState, ({ setState }) => ({
  logIn: (tokens: AuthTokens) => setState(() => ({ tokens })),
  logOut: () => setState(() => emptyState),
}))

authStore.subscribe(() => {
  const state = authStore.state
  const result = authStorage.save(state)

  if (result.isErr()) {
    console.error('Failed to save Auth sessions:', result.error)
  }
})

export const useIsLoggedIn = () => useSelector(authStore, s => s.tokens != null)
export const useAccessToken = () => useSelector(authStore, s => s.tokens?.accessToken ?? null)
