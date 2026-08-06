import { type ReactNode } from 'react'
import { tv, type ClassProp, type VariantProps } from 'tailwind-variants'

const stylePageShell = tv({
  base: `
    flex flex-col
  `,
  variants: {
    heightFull: {
      min: 'min-h-dvh',
      max: 'h-dvh overflow-clip',
    },
    theme: {
      default: 'bg-bg-1 text-text-muted',
      none: null,
    },
  },
  defaultVariants: {
    theme: 'default',
    heightFull: 'min',
  },
})

export const PageShell = (p: {
  variants?: VariantProps<typeof stylePageShell> & ClassProp<string>
  children: ReactNode
}) => <div className={stylePageShell(p.variants)}>{p.children}</div>
