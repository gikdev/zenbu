import { createStore } from '@tanstack/react-store'

type SettingsStoreValue = {
  isModalOpen: boolean
}

const initialValue: SettingsStoreValue = {
  isModalOpen: false,
}

export const settingsStore = createStore(initialValue, ({ setState }) => ({
  open: () => setState(p => ({ ...p, isModalOpen: true })),
  close: () => setState(p => ({ ...p, isModalOpen: false })),
  reset: () => setState(() => initialValue),
}))
