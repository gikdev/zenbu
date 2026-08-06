import { StorageEntry, storage, keys } from '../persistence'
import type { Theme } from './Theme'

export const defaultTheme: Theme = 'dark'

export const currentThemeStorage = new StorageEntry<{ theme: Theme }>(storage, keys.Theming.CurrentTheme, {
  theme: defaultTheme,
})
