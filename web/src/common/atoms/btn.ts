import { tv } from 'tailwind-variants'

export const styleBtn = tv({
  base: `
    group/button inline-flex shrink-0 items-center
    justify-center rounded-lg border border-transparent
    bg-clip-padding text-sm text-mist-400
    whitespace-nowrap transition-all
    outline-none select-none
    cursor-pointer

    focus-visible:border-indigo-500
    focus-visible:ring-3 focus-visible:ring-indigo-500/50

    disabled:pointer-events-none disabled:opacity-50
  `,
  variants: {
    variant: {
      primary: 'bg-indigo-500 text-indigo-100 hover:bg-indigo-500/80',
      outline: 'border-mist-800 bg-transparent hover:border-mist-700 hover:text-mist-100',
      secondary: 'bg-mist-900 hover:bg-mist-800 text-mist-400 hover:text-mist-100',
      ghost: 'hover:bg-mist-800 hover:text-mist-100',
      destructive:
        'bg-red-500/10 text-red-100 hover:bg-red-500/20 focus-visible:border-red-500/40 focus-visible:ring-red-500/20',
      link: 'text-indigo-500 underline-offset-4 hover:underline',
    },
    size: {
      default: 'h-8 gap-1.5 px-2.5',
      xs: 'h-6 gap-1 rounded-md px-2 text-xs',
      sm: 'h-7 gap-1 rounded-md px-2.5 text-[0.8rem]',
      lg: 'h-9 gap-1.5 px-2.5',
      icon: 'size-8',
      'icon-xs': 'size-6 rounded-md',
      'icon-sm': 'size-7 rounded-md',
      'icon-lg': 'size-9',
    },
  },
  defaultVariants: {
    variant: 'ghost',
    size: 'default',
  },
})
