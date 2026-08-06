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
  },

  timeLog: {
    title: 'Time Log',
    description: 'A dead-simple work focus timer',
    clearSessionsConfirm: 'Clear all sessions?',
    totalSessionsLabel: 'Total Sessions',
    totalDurationLabel: 'Total Duration',
  },

  phrasePlayer: {
    title: 'Phrase Player',
    description: 'A music with phrases player',
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
