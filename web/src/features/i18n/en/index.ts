import type { BaseTranslation } from '../i18n-types.js'

const en = {
  welcome: {
    title: 'Zenbu',
    start: "Let's Go!",
  },

  writingArea: {
    title: 'Writing Area',
    description: 'A comfy area to write things down.',
    placeholder: 'Write something…',
    clearConfirm: 'Clear all content?',
    fileNamePrompt: 'File name:',
    moreOptionsDialogTitle: 'More Options',
    removeEverything: 'Remove Everything',
    downloadAsFile: 'Download As File',
    toggleLineWrap: 'Toggle Line Wrap',
    toggleTheme: 'Toggle Theme',
  },

  lyricsEditor: {
    title: 'Lyrics Editor',
    description: 'Write, edit, and view your lyrics.',
  },

  lyricsPlayer: {
    title: 'Lyrics Player',
    description: 'A lyrics player with music.',
  },

  timestampSongPlayer: {
    toastSuccess: 'Successfully set.',
    toastError: 'An error related to audio has occurred.',
    removeAudio: 'Remove audio',
    moreOptions: 'More Options',
    jumpToButton: 'Jump To',
    jumpToPrompt: 'Jump To:',
    audioNotSupported: 'Audio not supported.',
    notAvailable: 'N/A',
    volume: {
      muted: 'Muted',
      low: 'Low',
      medium: 'Medium',
      high: 'High',
    },
  },

  sucof: {
    title: 'Sucof',
    description: 'A dead-simple work focus timer',
    promptManualMinutes: 'Enter minutes for manual session:',
    invalidMinutes: 'Invalid minutes entered.',
    confirmReset: 'Are you sure you want to reset all Sucof sessions?',
    totalMinutes: 'Total Minutes',
    history: 'History',
  },

  accountManager: {
    title: 'Account Manager',
    description: 'Manage your account.',
  },

  settings: {
    title: 'Settings',
    description: 'The global settings for Zenbu.',
    wipNote: 'Work in progress.',
    sections: {
      language: {
        title: 'Language',
      },
      theme: {
        title: 'Theme',
        auto: 'Auto',
        dark: 'Dark',
        light: 'Light',
      },
      data: {
        title: 'Data',
        import: 'Import',
        export: 'Export',
        reset: 'Reset',
      },
    },
  },
} satisfies BaseTranslation

export default en
