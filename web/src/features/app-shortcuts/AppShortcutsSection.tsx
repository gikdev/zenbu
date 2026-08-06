import { AppShortcut } from './AppShortcut'
import { useAppShortcuts } from './useAppShortcuts'

export const AppShortcutsSection = () => {
  // const shortcuts = appShortcuts.toSorted((a, b) => a.name.localeCompare(b.name))
  const shortcuts = useAppShortcuts()

  return (
    <div className='flex w-full max-w-5xl flex-wrap items-center justify-center gap-2'>
      {shortcuts.map(shortcut => (
        <AppShortcut shortcut={shortcut} key={shortcut.id} />
      ))}
    </div>
  )
}
