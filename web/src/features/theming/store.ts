import { createStore, useSelector } from '@tanstack/react-store'

import { unwrapOr } from '#/common/helpers/Result'

import { currentThemeStorage, defaultTheme } from './currentThemeStorage'
import type { Theme } from './Theme'

type ThemeStoreValue = {
  theme: Theme
}

const getTheme = (): Theme => unwrapOr(currentThemeStorage.load(), defaultTheme, data => data.theme)

const initialValue: ThemeStoreValue = {
  theme: getTheme(),
}

export const themeStore = createStore(initialValue, ({ setState }) => ({
  set: (theme: Theme) => setState(p => ({ ...p, theme })),
  reset: () => setState(() => initialValue),
}))

export const useCurrentTheme = () => useSelector(themeStore, s => s.theme)
