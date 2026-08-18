import { motion, AnimatePresence } from 'motion/react'
import type { PropsWithChildren } from 'react'

import { PageShell } from '#/common/molecules/PageShell'

import styles from './CardPage.module.css'

export const CardPage = (p: PropsWithChildren) => (
  <PageShell variants={{ heightFull: 'min', class: styles.circuits }}>
    <div lang='fa' dir='rtl' className='use-lang-font flex flex-1 flex-col items-center justify-center'>
      <AnimatePresence mode='wait'>
        <motion.div
          className='flex w-full max-w-160 flex-col gap-8 rounded-4xl p-8'
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{
            duration: 0.3,
            ease: 'easeInOut',
            delay: 0.2,
          }}
        >
          {p.children}
        </motion.div>
      </AnimatePresence>
    </div>
  </PageShell>
)
