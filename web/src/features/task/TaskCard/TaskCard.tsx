import { useSelector } from '@tanstack/react-store'

import { taskStore } from '#/features/task/store'

import { TaskDoingCard } from './TaskDoingCard'
import { TaskIdleCard } from './TaskIdleCard'

export function TaskCard() {
  const isDoing = useSelector(taskStore, s => s.isDoing)

  return isDoing ? <TaskDoingCard /> : <TaskIdleCard />
}
