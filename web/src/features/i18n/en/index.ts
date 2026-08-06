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

  timeLog: {
    title: 'Time Log',
    description: 'A dead-simple work focus timer',
    clearSessionsConfirm: 'Clear all sessions?',
    totalSessions: 'Total Sessions',
    totalDuration: 'Total Duration',
    goHome: 'Go Home',
    reset: 'Reset',
  },

  phrasePlayer: {
    title: 'Phrase Player',
    description: 'A music with phrases player',

    launchSection: {
      player: {
        title: 'Player',
        description: 'Play an existing configured song.',
      },
      editor: {
        title: 'Editor',
        description: 'Configure a song (new / edit).',
      },
      home: {
        title: 'Home',
        description: 'Go home.',
      },
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
