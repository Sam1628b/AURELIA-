import { motion } from 'framer-motion'

export default function RoomCard({ room, onView, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <button
        onClick={() => onView(room)}
        data-cursor="view"
        className="relative block w-full overflow-hidden aspect-[4/5] text-left"
      >
        <img
          src={room.image}
          alt={room.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
      </button>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-serif text-2xl text-ivory">{room.name}</h3>
          <p className="mt-1 text-sm text-stone">{room.size} &middot; {room.guests}</p>
        </div>
        <div className="text-right shrink-0">
          <div className="text-sm text-champagne">From ${room.price}</div>
          <button
            onClick={() => onView(room)}
            data-cursor="button"
            className="mt-2 inline-flex items-center gap-2 text-[11px] tracking-widest2 uppercase text-ivory/80 group-hover:text-ivory transition-colors"
          >
            View Room
            <motion.span animate={{ x: 0 }} className="inline-block group-hover:translate-x-1 transition-transform">
              &rarr;
            </motion.span>
          </button>
        </div>
      </div>
    </motion.div>
  )
}
