import type { BaseTranslation } from '../i18n-types.js'

const en = {
  welcome: {
    title: 'Isshin',
    slogan: '🎯 One task at a time',
    description: "This app helps you focus on a single task until it's finished.",
    start: "Let's Go!",
  },

  task: {
    prompt: 'What do you want to do?',
    start: 'Start',
    edit: 'Edit',
    finish: 'Finish',
    cancel: 'Cancel',

    helpTitle: 'How does it work?',
    helpDescription:
      'Choose one clear task with a visible finish line. Focus on one task until it is done. If it feels too big, split it into smaller tasks first.',

    doingTip: 'Focus on this task until it is complete. If you discover another task, write it down and continue.',

    toastDone: 'Well done!',
    toastEmptyTask: 'Enter something first!',
  },

  settings: {
    title: 'Settings',
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
