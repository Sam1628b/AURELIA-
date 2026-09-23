import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const IMG = 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1920&auto=format&fit=crop'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section ref={ref} className="relative h-[100svh] overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 scale-110">
        <img src={IMG} alt="Aurelia Grand Hotel facade at dusk" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/20 to-ink" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 flex h-full flex-col justify-end pb-24">
        <div className="container-edge">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-6xl sm:text-7xl md:text-8xl leading-[0.98] text-ivory max-w-3xl"
          >
            A place
            <br />
            to arrive.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-8 max-w-md text-stone text-base sm:text-lg leading-relaxed"
          >
            Where architecture, hospitality and quiet luxury meet.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#welcome"
              data-cursor="button"
              className="border border-ivory/60 px-7 py-3.5 text-[11px] tracking-widest2 uppercase text-ivory hover:bg-ivory hover:text-ink transition-colors duration-300"
            >
              Explore the Hotel
            </a>
            <a
              href="#book"
              data-cursor="button"
              className="bg-champagne px-7 py-3.5 text-[11px] tracking-widest2 uppercase text-ink hover:bg-ivory transition-colors duration-300"
            >
              Book Your Stay
            </a>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 right-8 hidden sm:flex flex-col items-center gap-3 text-stone"
      >
        <span className="text-[10px] tracking-widest2 uppercase [writing-mode:vertical-rl]">
          Scroll to discover
        </span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="h-10 w-px bg-stone"
        />
      </motion.div>
    </section>
  )
}
