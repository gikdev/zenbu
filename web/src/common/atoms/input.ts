import { tv } from 'tailwind-variants'

export const styleInput = tv({
  base: `
    min-h-8 w-full min-w-0
    rounded-md border border-border-muted
    bg-transparent px-3 py-1
    transition-colors outline-none

    placeholder:text-text-muted

    focus-visible:border-brand
    focus-visible:ring-3 focus-visible:ring-brand/50

    disabled:pointer-events-none disabled:cursor-not-allowed
    disabled:opacity-50
  `,
})
