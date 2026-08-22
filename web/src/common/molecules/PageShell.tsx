import { motion, AnimatePresence } from 'motion/react'
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
}) => (
  <AnimatePresence mode='wait'>
    <motion.div
      key={window.location.pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={stylePageShell(p.variants)}
    >
      {p.children}
    </motion.div>
  </AnimatePresence>
)
