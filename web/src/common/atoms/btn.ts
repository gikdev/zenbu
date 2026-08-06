import { tv } from 'tailwind-variants'

export const styleBtn = tv({
  base: `
    group/button inline-flex shrink-0 items-center
    justify-center rounded-lg border border-transparent
    bg-clip-padding text-sm text-text-muted
    whitespace-nowrap transition-all
    outline-none select-none
    cursor-pointer

    focus-visible:border-brand
    focus-visible:ring-3 focus-visible:ring-brand/50

    disabled:pointer-events-none disabled:opacity-50
  `,
  variants: {
    variant: {
      primary: 'bg-brand text-text-important hover:bg-brand/80',
      outline: 'border-border-muted/50 bg-transparent hover:border-border-muted/100 hover:text-text-important',
      secondary: 'bg-bg-2 hover:bg-bg-3 text-text-muted hover:text-text-important',
      ghost: 'hover:bg-bg-3 hover:text-text-important',
      destructive:
        'bg-danger/10 text-text-important hover:bg-danger/20 focus-visible:border-danger/40 focus-visible:ring-danger/20',
      link: 'text-brand underline-offset-4 hover:underline',
    },
    size: {
      default: 'h-10 gap-1.5 px-2.5',
      xs: 'h-6 gap-1 rounded-md px-2 text-xs',
      sm: 'h-8 gap-1 rounded-md px-2.5 text-[0.8rem]',
      lg: 'h-12 gap-1.5 px-2.5',
      icon: 'size-10',
      'icon-xs': 'size-6 rounded-md',
      'icon-sm': 'size-8 rounded-md',
      'icon-lg': 'size-12',
    },
  },
  defaultVariants: {
    variant: 'ghost',
    size: 'default',
  },
})
