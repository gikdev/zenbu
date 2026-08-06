import { AppShortcut } from './AppShortcut'
import { appShortcuts } from './appShortcuts'

export const AppShortcutsSection = () => {
  const sortedShortcuts = appShortcuts.toSorted((a, b) => a.name.localeCompare(b.name))

  return (
    <div className='flex w-full max-w-5xl flex-wrap items-center justify-center gap-2'>
      {sortedShortcuts.map(shortcut => (
        <AppShortcut shortcut={shortcut} key={shortcut.id} />
      ))}
    </div>
  )
}
