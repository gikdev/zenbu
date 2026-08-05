import { tv } from 'tailwind-variants'

export const styleAlert = tv({
  slots: {
    base: `
      group/alert relative grid
      w-full gap-0.5 rounded-lg border
      border-mist-700
      px-2.5 py-2 text-left text-sm
    `,

    title: `
      font-bold
      [&_a]:underline
      [&_a]:underline-offset-3
    `,

    description: `
      text-sm
      text-mist-400

      [&_p:not(:last-child)]:mb-4
    `,

    action: `
      absolute top-2 right-2
    `,
  },

  variants: {
    variant: {
      default: {
        base: 'bg-mist-900 text-mist-400',
      },

      destructive: {
        base: 'bg-card text-red-500',
        description: 'text-red-500/90',
      },
    },
  },

  defaultVariants: {
    variant: 'default',
  },
})
