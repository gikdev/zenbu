import { createStore, useSelector } from '@tanstack/react-store'

import { currentThemeStorage, defaultTheme } from './currentThemeStorage'
import type { Theme } from './Theme'

type ThemeStoreValue = {
  theme: Theme
}

const getTheme = (): Theme =>
  currentThemeStorage.load().match(
    data => data.theme,
    () => defaultTheme,
  )

const initialValue: ThemeStoreValue = {
  theme: getTheme(),
}

export const themeStore = createStore(initialValue, ({ setState }) => ({
  set: (theme: Theme) => setState(p => ({ ...p, theme })),
  reset: () => setState(() => initialValue),
}))

export const useCurrentTheme = () => useSelector(themeStore, s => s.theme)
