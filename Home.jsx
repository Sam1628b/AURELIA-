import { motion } from 'framer-motion'
import Hero from '../components/Hero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import RoomShowcase from '../components/RoomShowcase.jsx'
import Counter from '../components/Counter.jsx'
import { experiences } from '../data/experiences.js'

const WELCOME_IMG = 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1400&auto=format&fit=crop'
const DINING_IMG = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1920&auto=format&fit=crop'
const CTA_IMG = 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1920&auto=format&fit=crop'

export default function Home({ onView, onBook }) {
  return (
    <>
      <Hero />

      <section id="welcome" className="container-edge py-28 md:py-36 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 lg:col-start-1"
        >
          <div className="text-[11px] tracking-widest2 uppercase text-champagne mb-4">Welcome</div>
          <h2 className="font-serif text-4xl sm:text-5xl leading-[1.05] text-ivory">
            Welcome to Aurelia.
          </h2>
          <p className="mt-8 text-stone leading-relaxed max-w-sm">
            A destination created for unhurried mornings, long evenings and stays worth
            remembering. Every room, every table, every corridor was considered before it was built.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-6 lg:col-start-7 aspect-[4/3] overflow-hidden"
        >
          <img src={WELCOME_IMG} alt="Aurelia lobby interior" className="h-full w-full object-cover" />
        </motion.div>
      </section>

      <section className="border-y hairline">
        <div className="container-edge py-20 grid grid-cols-1 sm:grid-cols-3 gap-12">
          <Counter to={120} label="Rooms & Suites" />
          <Counter to={3} label="Signature Dining Spaces" />
          <Counter to={24} suffix="/7" label="Concierge" />
        </div>
      </section>

      <RoomShowcase onView={onView} />

      <section className="relative py-32 md:py-44 overflow-hidden">
        <div className="absolute inset-0">
          <img src={DINING_IMG} alt="Fine dining table setting" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-ink/65" />
        </div>
        <div className="relative container-edge text-center max-w-2xl mx-auto">
          <SectionHeading eyebrow="Dining" title="The art of dining." align="center" />
          <p className="mt-7 text-stone leading-relaxed">
            From intimate dinners to unforgettable evenings, every table tells a story.
          </p>
          <a
            href="/experience"
            className="mt-10 inline-block border border-ivory/60 px-8 py-3.5 text-[11px] tracking-widest2 uppercase text-ivory hover:bg-ivory hover:text-ink transition-colors"
          >
            Discover Dining
          </a>
        </div>
      </section>

      <section className="py-28 md:py-36">
        <div className="container-edge mb-14">
          <SectionHeading eyebrow="Experiences" title="More than a room." />
        </div>
        <div className="flex gap-5 overflow-x-auto pb-6 px-6 sm:px-[clamp(1.25rem,5vw,6rem)] snap-x snap-mandatory">
          {experiences.map((ex, i) => (
            <motion.div
              key={ex.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.05 }}
              className="relative shrink-0 w-[280px] sm:w-[340px] aspect-[3/4] overflow-hidden snap-start group"
            >
              <img src={ex.image} alt={ex.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-serif text-2xl text-ivory">{ex.name}</h3>
                <p className="mt-2 text-sm text-stone leading-relaxed">{ex.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative py-32 md:py-44 overflow-hidden">
        <div className="absolute inset-0">
          <img src={CTA_IMG} alt="Hotel room at night" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-ink/70" />
        </div>
        <div className="relative container-edge text-center">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-ivory">
            Your room is waiting.
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button
              onClick={onBook}
              className="bg-champagne px-8 py-3.5 text-[11px] tracking-widest2 uppercase text-ink hover:bg-ivory transition-colors"
            >
              Book Your Stay
            </button>
            <a
              href="/rooms"
              className="border border-ivory/60 px-8 py-3.5 text-[11px] tracking-widest2 uppercase text-ivory hover:bg-ivory hover:text-ink transition-colors"
            >
              Explore the Hotel
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
