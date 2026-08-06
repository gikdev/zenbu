import { Link } from '@tanstack/react-router'
import { tv } from 'tailwind-variants'

import type { IAppShortcut } from './IAppShortcut'

const styleApp = tv({
  base: `
    flex flex-col items-center gap-1 p-4
    rounded-md text-center min-w-max
    cursor-pointer min-w-24 w-full max-w-36

    bg-bg-2 hover:bg-bg-3 text-text-muted
    hover:text-text-important hover:ring-1
    hover:ring-border-muted
  `,
})

interface AppShortcutProps {
  shortcut: IAppShortcut
}

export const AppShortcut = ({ shortcut: s }: AppShortcutProps) =>
  s.disabled ? (
    <button className={styleApp({ class: 'opacity-50' })} title={s.description} onClick={() => alert(s.description)}>
      <s.icon weight='fill' size='32' />
      <p className='text-xs'>{s.name}</p>
    </button>
  ) : (
    <Link to={s.url} className={styleApp()} title={s.description} onContextMenu={() => alert(s.description)}>
      <s.icon weight='fill' size='32' />
      <p className='text-xs'>{s.name}</p>
    </Link>
  )
