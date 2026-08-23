import { createStore } from '@tanstack/react-store'

export const newJottingStore = createStore(false, s => ({
  open: () => s.setState(() => true),
  close: () => s.setState(() => false),
  toggle: () => s.setState(p => !p),
}))
