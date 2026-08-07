import { tv } from 'tailwind-variants'

export const styleInput = tv({
  base: `
    min-w-0
    rounded-md border border-border-muted
    bg-transparent px-3 py-1
    transition-colors outline-none

    placeholder:text-text-muted

    focus-visible:border-brand
    focus-visible:ring-3 focus-visible:ring-brand/50

    disabled:pointer-events-none disabled:cursor-not-allowed
    disabled:opacity-50
  `,
  variants: {
    mode: {
      inline: 'min-h-8 inline-block',
      block: 'min-h-10 w-full',
      multiline: 'min-h-24 w-full resize-y',
    },
  },
  defaultVariants: {
    mode: 'block',
  },
})
