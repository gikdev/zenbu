import { createStore } from '@tanstack/react-store'

type TaskStoreValue = {
  task: string | null
  isDoing: boolean
}

const initialValue: TaskStoreValue = {
  task: null,
  isDoing: false,
}

export const taskStore = createStore(initialValue, ({ setState }) => ({
  start: () => setState(p => ({ ...p, isDoing: true })),
  stop: () => setState(p => ({ ...p, isDoing: false })),
  clear: () => setState(p => ({ ...p, task: null })),
  setTask: (task: string) => setState(p => ({ ...p, task })),
  startTask: (task: string) => setState(p => ({ ...p, isDoing: true, task })),
  reset: () => setState(() => initialValue),
}))
