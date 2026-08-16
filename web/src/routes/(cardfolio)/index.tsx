import { ReadCvLogoIcon, type Icon } from '@phosphor-icons/react'
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { motion, AnimatePresence } from 'motion/react'
import { useMemo } from 'react'

import { styleBtn } from '#/common/atoms/btn'
import { PageShell } from '#/common/molecules/PageShell'

const bio =
  'محمدمهدی بهرامی هستم، با اسم خودمونی «اِسپِک». یه برنامه‌نویس دوزبانه‌ی فول‌استک هستم. اطلاعات بیشتر: همین پایین 👇🏻'

interface CardOption {
  id: string
  title: string
  icon: Icon
  onClick: () => void
  isSpecial?: boolean
  disabled?: boolean
}

export const Route = createFileRoute('/(cardfolio)/')({
  component: RouteComponent,
})

function RouteComponent() {
  const navigate = useNavigate()
  const cardOptions = useMemo<CardOption[]>(
    () => [
      {
        id: 'resume',
        icon: ReadCvLogoIcon,
        title: 'رزومه',
        onClick: () => {},
        isSpecial: true,
        disabled: true,
      },
    ],
    [],
  )

  return (
    <PageShell variants={{ heightFull: 'max' }}>
      <div lang='fa' dir='rtl' className='use-lang-font flex flex-1 flex-col items-center justify-center'>
        <AnimatePresence mode='wait'>
          <motion.div
            className='sm:bg-bg-2/30 border-border-muted/30 flex max-w-160 flex-col gap-8 rounded-4xl p-8 sm:border'
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
            <div className='flex flex-col items-center gap-4'>
              <div className='flex items-center gap-4'>
                <title>بهرامی</title>

                <img className='size-16 rounded-2xl hover:-scale-x-100' src='/cardfolio/AnimeMe.png' alt='' />

                <p className='text-text-important text-4xl font-bold'>
                  <span>بهرامی‌ام!</span>

                  <button type='button' className='cursor-pointer' onClick={() => navigate({ to: '/welcome' })}>
                    👋🏻
                  </button>
                </p>
              </div>

              <p className='text-center text-lg'>{bio}</p>
            </div>

            <div className='flex flex-col gap-2'>
              {cardOptions.map(option => (
                <button
                  key={option.id}
                  type='button'
                  disabled={option.disabled}
                  onClick={option.onClick}
                  className={styleBtn({
                    variant: option.isSpecial ? 'primary' : 'outline',
                    size: 'lg',
                  })}
                >
                  <option.icon size={20} weight={option.isSpecial ? 'fill' : 'regular'} />
                  <span>{option.title}</span>
                </button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </PageShell>
  )
}
