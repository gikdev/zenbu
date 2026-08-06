import {
  BookmarkIcon,
  ChalkboardTeacherIcon,
  ClipboardIcon,
  CoinIcon,
  FolderIcon,
  GearIcon,
  KanbanIcon,
  MusicNoteIcon,
  PencilIcon,
  TimerIcon,
} from '@phosphor-icons/react'
import { linkOptions } from '@tanstack/react-router'

import type { IAppShortcut } from './IAppShortcut'

export const appShortcuts: IAppShortcut[] = [
  {
    id: 'phrase-player',
    name: 'Phrase Player',
    icon: MusicNoteIcon,
    url: linkOptions({ to: '.' }).to,
    disabled: true,
    description: 'A music with phrases player',
  },
  {
    id: 'time-log',
    name: 'Time Log',
    icon: TimerIcon,
    url: linkOptions({ to: '.' }).to,
    disabled: true,
    description:
      'A dead-simple work focus timer with one big play/pause button; start a session, stop it, and at the end of the day see exactly how many focused sessions you had and total raw work time — nothing more.',
  },
  {
    id: 'kanban',
    name: 'Kanban',
    icon: KanbanIcon,
    url: linkOptions({ to: '.' }).to,
    disabled: true,
    description:
      'A lightweight, no-frills kanban board for storing all tasks related to a specific project, with nothing more than a title and a status.',
  },
  {
    id: 'writing',
    name: 'Writing Area',
    icon: PencilIcon,
    disabled: true,
    url: linkOptions({ to: '.' }).to,
    description:
      'A full-screen, distraction-free text area that saves automatically to local storage, with selectable fonts, themes, font sizing, word wrap, and file open/save — so you can write comfortably in any language or mood.',
  },
  {
    id: 'bookmarks',
    name: 'Bookmarks',
    icon: BookmarkIcon,
    disabled: true,
    url: linkOptions({ to: '.' }).to,
    description:
      'A fast, visual bookmark manager with quick access, color coding, and flexible organization via folders and/or tags.',
  },
  {
    id: 'checklists',
    name: 'Checklists',
    icon: ClipboardIcon,
    disabled: true,
    url: linkOptions({ to: '.' }).to,
    description:
      'A reusable, stateful checklist tool for repeatable processes, with optional items, notes, cloning, sharing, and beautiful printable output.',
  },
  {
    id: 'expense',
    name: 'Expense',
    icon: CoinIcon,
    disabled: true,
    url: linkOptions({ to: '.' }).to,
    description:
      'A personal finance tool that uses a fictional internal currency to avoid real-world decimal headaches, tracks debt and assets, charts net wealth over time, and optionally captures emotional context around spending.',
  },
  {
    id: 'file-manager',
    name: 'Files',
    icon: FolderIcon,
    disabled: true,
    url: linkOptions({ to: '.' }).to,
    description:
      'A centralized file storage and metadata service that lets you upload files once, tag and describe them, then reference them by unique ID from any other app (Music Library, Notebooks, etc.) — eliminating duplicate uploads and scattered file handling.',
  },
  {
    id: 'teaching-platform',
    name: 'Teaching Platform',
    icon: ChalkboardTeacherIcon,
    disabled: true,
    url: linkOptions({ to: '.' }).to,
    description:
      "A learning platform that combines courses, an exercise/project library, and a linear roadmap that sequences everything into a clear path — eliminating the 'what do I learn next?' confusion that plagues self-taught developers.",
  },
  {
    id: 'settings',
    url: linkOptions({ to: '/apps/settings' }).to,
    name: 'Settings',
    icon: GearIcon,
    disabled: false,
    description:
      'The global settings for Yorozu. Might include stuff like: account, data import/export, language, theme, preferences, etc.',
  },
]
