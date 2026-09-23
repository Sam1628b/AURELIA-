import { useState } from 'react'
import { motion } from 'framer-motion'

const IMG =
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1920&auto=format&fit=crop'

export default function IntroExperience({ onEnter }) {
  const [leaving, setLeaving] = useState(false)

  const handleEnter = () => {
    setLeaving(true)
    sessionStorage.setItem('aurelia-intro-seen', '1')
    setTimeout(onEnter, 900)
  }

  const handleSkip = () => {
    sessionStorage.setItem('aurelia-intro-seen', '1')
    onEnter()
  }

  return (
    <motion.div
      className="fixed inset-0 z-[200] bg-ink overflow-hidden"
      animate={leaving ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: leaving ? 1.3 : 1.05, opacity: 0.55 }}
        transition={{ duration: leaving ? 1.1 : 3.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <img src={IMG} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-ink" />
      </motion.div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="font-serif text-4xl sm:text-5xl md:text-6xl tracking-[0.12em] text-ivory">
            AURELIA
          </div>
          <div className="mt-2 text-[11px] sm:text-xs tracking-widest2 text-champagne">
            GRAND HOTEL
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 1 }}
          className="mt-8 font-serif italic text-lg sm:text-xl text-stone"
        >
          A timeless stay, reimagined.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          onClick={handleEnter}
          className="mt-14 border border-champagne/70 px-9 py-4 text-[11px] tracking-widest2 uppercase text-champagne hover:bg-champagne hover:text-ink transition-colors duration-300"
        >
          Enter the Hotel
        </motion.button>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          onClick={handleSkip}
          className="mt-6 text-[11px] tracking-widest2 uppercase text-stone hover:text-ivory transition-colors"
        >
          Skip Intro
        </motion.button>
      </div>
    </motion.div>
  )
}
