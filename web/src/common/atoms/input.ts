import { tv } from 'tailwind-variants'

export const styleInput = tv({
  base: `
    min-h-8 w-full min-w-0
    rounded-md border border-mist-700
    bg-transparent px-3 py-1
    transition-colors outline-none

    placeholder:text-mist-400

    focus-visible:border-indigo-500
    focus-visible:ring-3 focus-visible:ring-indigo-500/50

    disabled:pointer-events-none disabled:cursor-not-allowed
    disabled:bg-mist-600/50 disabled:opacity-50
  `,
})
