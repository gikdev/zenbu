import { XIcon } from '@phosphor-icons/react'
import { AnimatePresence, motion, type Transition, type Variants } from 'motion/react'
import { useMemo, type ReactNode } from 'react'
import { tv } from 'tailwind-variants'

import { styleBtn } from '#/common/atoms/btn'
import { useMediaQuery } from '#/common/helpers/useMediaQuery'

const styleAdaptiveDialog = tv({
  slots: {
    backdrop: `
      fixed inset-0 z-10 flex min-h-dvh min-w-dvw flex-col items-center bg-black/70
      justify-end p-0 sm:justify-center sm:p-4
    `,
    container: `
      flex flex-col border border-border-muted bg-bg-2
      rounded-t-md sm:rounded-md
      min-h-[50dvh] sm:min-h-auto
      max-w-full sm:max-w-120
      min-w-full sm:min-w-80
    `,
    header: 'flex items-center justify-between border-b border-border-muted px-4 py-2',
    title: 'font-bold text-text-important',
    content: 'p-4',
  },
})

// 📱 Mobile: Slide up from bottom
// 💻 Desktop: Scale in from center
const getContainerVariants = (isMobile: boolean): Variants => ({
  initial: isMobile
    ? { y: '100%', scale: 1 } // Slide up from bottom
    : { y: 0, scale: 0.8 }, // Scale in from center
  animate: isMobile
    ? { y: 0, scale: 1 } // Settle at bottom
    : { y: 0, scale: 1 }, // Settle at center
  exit: isMobile
    ? { y: '100%', scale: 1 } // Slide back down
    : { y: 0, scale: 0.8 }, // Scale back out
})

const backdropVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

const backdropTransition: Transition = {
  duration: 0.3,
  ease: 'easeInOut',
}

const containerTransition: Transition = {
  type: 'spring',
  damping: 25,
  stiffness: 300,
  duration: 0.4,
}

export const AdaptiveDialog = (p: {
  isOpen: boolean
  title: string
  onClose: (() => void) | null
  children: ReactNode
}) => {
  const styles = styleAdaptiveDialog()
  const isMobile = useMediaQuery('(max-width: 640px)') // Tailwind's 'sm' breakpoint

  const containerVariants: Variants = useMemo(() => getContainerVariants(isMobile), [isMobile])

  return (
    <AnimatePresence>
      {p.isOpen && (
        <motion.div
          key='modal__backdrop'
          variants={backdropVariants}
          initial='initial'
          animate='animate'
          exit='exit'
          transition={backdropTransition}
          className={styles.backdrop()}
          onClick={() => p.onClose?.()}
        >
          <motion.div
            key='modal__container'
            variants={containerVariants}
            initial='initial'
            animate='animate'
            exit='exit'
            transition={containerTransition}
            className={styles.container()}
            onClick={e => e.stopPropagation()}
          >
            <div className={styles.header()}>
              <p className={styles.title()}>{p.title}</p>

              <motion.button
                key='modal__close-btn'
                whileTap={{ scale: 0.95 }}
                className={styleBtn({ size: 'icon' })}
                disabled={p.onClose == null}
                onClick={p.onClose || undefined}
                type='button'
              >
                <XIcon size={20} />
              </motion.button>
            </div>

            <div className={styles.content()}>{p.children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
