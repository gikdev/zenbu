import { MicrophoneIcon } from '@phosphor-icons/react'
import { motion, AnimatePresence } from 'motion/react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { v4 } from 'uuid'

import { styleBtn } from '#/common/atoms/btn'

interface Phrase {
  id: string
  phrase: string
  language: 'en' | 'ja' | 'fa'
  audio: string
}

const phrases: Phrase[] = [
  { id: v4(), phrase: 'صب بخیر!', language: 'fa', audio: '/cardfolio/sob-bekheyr.mp3' },
  { id: v4(), phrase: 'چطوری؟', language: 'fa', audio: '/cardfolio/chetori.mp3' },
  { id: v4(), phrase: 'خوش‌وقتم!', language: 'fa', audio: '/cardfolio/khoshvaghtam.mp3' },
  { id: v4(), phrase: 'Morning!', language: 'en', audio: '/cardfolio/morning.mp3' },
  { id: v4(), phrase: 'Sup?', language: 'en', audio: '/cardfolio/sup.mp3' },
  { id: v4(), phrase: 'Nice to meet ya!', language: 'en', audio: '/cardfolio/nice-to-meet-ya.mp3' },
  { id: v4(), phrase: '元気？', language: 'ja', audio: '/cardfolio/genki.mp3' },
  { id: v4(), phrase: 'おはよう！', language: 'ja', audio: '/cardfolio/ohayou.mp3' },
  { id: v4(), phrase: 'よろしくね！', language: 'ja', audio: '/cardfolio/yoroshiku-ne.mp3' },
]

export const ProfileImage = () => {
  const [isHovered, setIsHovered] = useState(false)

  const handleMicrophoneClick = () => {
    const randomIndex = Math.floor(Math.random() * phrases.length)
    const selected = phrases[randomIndex]

    const audio = new Audio(selected.audio)
    audio.play().catch(err => {
      console.warn('Audio playback error:', err)
    })

    toast.info(`🗣️ ${selected.phrase} (${selected.language})`, {
      position: 'bottom-right',
      autoClose: 3000,
      rtl: selected.language === 'fa',
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    })
  }

  return (
    <div className='group relative' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <img className='size-32 rounded-4xl' src='/cardfolio/AnimeMe.png' alt='' />

      <AnimatePresence mode='wait'>
        {isHovered && (
          <motion.button
            type='button'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleMicrophoneClick}
            className={styleBtn({
              size: 'icon',
              variant: 'secondary',
              class: 'absolute bottom-0 inset-s-0',
            })}
          >
            <MicrophoneIcon size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
