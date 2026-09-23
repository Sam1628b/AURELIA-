import { motion } from 'framer-motion'
import { rooms } from '../data/rooms.js'

const HERO_IMG = 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1920&auto=format&fit=crop'

export default function Rooms({ onView }) {
  return (
    <>
      <section className="relative h-[60svh] min-h-[420px] overflow-hidden">
        <img src={HERO_IMG} alt="A deluxe room at Aurelia" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/30 to-ink" />
        <div className="relative z-10 h-full flex flex-col justify-end pb-16 container-edge">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-6xl sm:text-7xl text-ivory"
          >
            Stay your way.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-5 max-w-md text-stone"
          >
            Rooms and suites designed around comfort, quiet and character.
          </motion.p>
        </div>
      </section>

      <section className="container-edge py-24 md:py-32 space-y-28 md:space-y-40">
        {rooms.map((room, i) => (
          <motion.div
            key={room.slug}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${
              i % 2 === 1 ? 'lg:flex lg:flex-row-reverse' : ''
            }`}
          >
            <div className={`lg:col-span-7 aspect-[4/3] overflow-hidden ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
              <img
                src={room.image}
                alt={room.name}
                loading="lazy"
                data-cursor="view"
                className="h-full w-full object-cover"
              />
            </div>
            <div className={`lg:col-span-5 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
              <div className="text-[11px] tracking-widest2 uppercase text-champagne mb-4">
                {room.view}
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl text-ivory">{room.name}</h2>
              <p className="mt-6 text-stone leading-relaxed">{room.description}</p>
              <dl className="mt-8 grid grid-cols-2 gap-y-3 text-sm">
                <dt className="text-stone">Size</dt>
                <dd className="text-ivory">{room.size}</dd>
                <dt className="text-stone">Guests</dt>
                <dd className="text-ivory">{room.guests}</dd>
                <dt className="text-stone">Bed</dt>
                <dd className="text-ivory">{room.bed}</dd>
              </dl>
              <div className="mt-8 flex items-center gap-6">
                <span className="font-serif text-2xl text-champagne">From ${room.price}</span>
                <button
                  onClick={() => onView(room)}
                  className="border border-champagne/70 px-6 py-3 text-[11px] tracking-widest2 uppercase text-champagne hover:bg-champagne hover:text-ink transition-colors"
                >
                  View Details
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </section>
    </>
  )
}
