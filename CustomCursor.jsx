import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [variant, setVariant] = useState('default')
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springX = useSpring(x, { damping: 30, stiffness: 400, mass: 0.4 })
  const springY = useSpring(y, { damping: 30, stiffness: 400, mass: 0.4 })

  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!isFinePointer || prefersReduced) return
    setEnabled(true)
    document.body.classList.add('custom-cursor-active')

    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
      const target = e.target.closest('[data-cursor]')
      setVariant(target ? target.getAttribute('data-cursor') : 'default')
    }
    window.addEventListener('mousemove', move)
    return () => {
      window.removeEventListener('mousemove', move)
      document.body.classList.remove('custom-cursor-active')
    }
  }, [x, y])

  if (!enabled) return null

  const isImage = variant === 'view'
  const isButton = variant === 'button'

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[999] flex items-center justify-center rounded-full mix-blend-difference"
      style={{
        x: springX,
        y: springY,
        translateX: '-50%',
        translateY: '-50%',
        backgroundColor: '#F6F1E6',
      }}
      animate={{
        width: isImage ? 88 : isButton ? 14 : 8,
        height: isImage ? 88 : isButton ? 14 : 8,
      }}
      transition={{ type: 'spring', damping: 24, stiffness: 300 }}
    >
      {isImage && (
        <span className="text-[11px] font-medium tracking-widest2 text-ink uppercase">View</span>
      )}
    </motion.div>
  )
}
