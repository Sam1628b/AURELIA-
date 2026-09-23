import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, align = 'left' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={align === 'center' ? 'text-center' : ''}
    >
      {eyebrow && (
        <div className="text-[11px] tracking-widest2 uppercase text-champagne mb-4">{eyebrow}</div>
      )}
      <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-ivory">
        {title}
      </h2>
    </motion.div>
  )
}
