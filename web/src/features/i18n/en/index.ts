import type { BaseTranslation } from '../i18n-types.js'

const en = {
  welcome: {
    title: 'Zenbu',
    slogan: '🎯 One task at a time',
    description: "This app helps you focus on a single task until it's finished.",
    start: "Let's Go!",
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
