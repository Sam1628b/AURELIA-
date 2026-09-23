import { useEffect, useRef } from 'react'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'

export default function Counter({ to, suffix = '', label }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const motionVal = useMotionValue(0)
  const spring = useSpring(motionVal, { damping: 30, stiffness: 60 })
  const spanRef = useRef(null)

  useEffect(() => {
    if (isInView) motionVal.set(to)
  }, [isInView, to, motionVal])

  useEffect(() => {
    const unsub = spring.on('change', (v) => {
      if (spanRef.current) spanRef.current.textContent = Math.round(v).toString()
    })
    return unsub
  }, [spring])

  return (
    <div ref={ref} className="flex flex-col items-start">
      <span className="font-serif text-6xl md:text-7xl text-ivory">
        <span ref={spanRef}>0</span>
        {suffix}
      </span>
      <span className="mt-3 text-xs tracking-widest2 uppercase text-stone">{label}</span>
    </div>
  )
}
