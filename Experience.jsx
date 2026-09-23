import { motion } from 'framer-motion'
import { restaurants } from '../data/restaurants.js'
import { experiences } from '../data/experiences.js'
import SectionHeading from '../components/SectionHeading.jsx'

const HERO_IMG = 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1920&auto=format&fit=crop'
const WELLNESS_IMG = 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1600&auto=format&fit=crop'
const EVENTS_IMG = 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1920&auto=format&fit=crop'

const wellnessItems = ['Spa', 'Infinity Pool', 'Fitness Studio', 'Sauna', 'Wellness Treatments']
const eventItems = ['Weddings', 'Private Dining', 'Corporate Events', 'Celebrations']

export default function Experience() {
  return (
    <>
      <section className="relative h-[60svh] min-h-[420px] overflow-hidden">
        <img src={HERO_IMG} alt="Fine dining at Aurelia" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/30 to-ink" />
        <div className="relative z-10 h-full flex flex-col justify-end pb-16 container-edge">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-6xl sm:text-7xl text-ivory"
          >
            More than a stay.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-5 max-w-md text-stone"
          >
            An entire world of experiences, inside one address.
          </motion.p>
        </div>
      </section>

      <section className="container-edge py-24 md:py-32">
        <SectionHeading eyebrow="Dining" title="Three rooms, one address." />
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
          {restaurants.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: i * 0.08 }}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img src={r.image} alt={r.name} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="mt-5">
                <div className="text-[11px] tracking-widest2 uppercase text-champagne">{r.kind}</div>
                <h3 className="mt-2 font-serif text-3xl text-ivory">{r.name}</h3>
                <p className="mt-3 text-sm text-stone">{r.hours}</p>
                <p className="mt-4 text-stone leading-relaxed text-sm">{r.description}</p>
                <button className="mt-5 text-[11px] tracking-widest2 uppercase text-ivory/80 hover:text-ivory transition-colors">
                  Explore &rarr;
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img src={WELLNESS_IMG} alt="Aurelia spa interior" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-ink/70" />
        </div>
        <div className="relative container-edge grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Wellness" title="Rest. Reset. Repeat." />
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex items-center">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 w-full">
              {wellnessItems.map((w) => (
                <li key={w} className="border-b hairline pb-4 font-serif text-2xl text-ivory">
                  {w}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-28 md:py-36">
        <div className="container-edge mb-14">
          <SectionHeading eyebrow="Experiences" title="Rooftop, spa & more." />
        </div>
        <div className="container-edge grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {experiences.map((ex) => (
            <div key={ex.name} className="relative aspect-[3/4] overflow-hidden group">
              <img src={ex.image} alt={ex.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
              <div className="absolute bottom-0 p-5">
                <h3 className="font-serif text-xl text-ivory">{ex.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img src={EVENTS_IMG} alt="Event space at Aurelia" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-ink/70" />
        </div>
        <div className="relative container-edge text-center max-w-2xl mx-auto">
          <SectionHeading eyebrow="Events" title="Worth gathering for." align="center" />
          <ul className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-stone">
            {eventItems.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
          <button className="mt-10 bg-champagne px-8 py-3.5 text-[11px] tracking-widest2 uppercase text-ink hover:bg-ivory transition-colors">
            Plan an Event
          </button>
        </div>
      </section>
    </>
  )
}
