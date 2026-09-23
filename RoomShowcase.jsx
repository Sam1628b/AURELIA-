import { rooms } from '../data/rooms.js'
import RoomCard from './RoomCard.jsx'
import SectionHeading from './SectionHeading.jsx'

export default function RoomShowcase({ onView }) {
  const featured = rooms.slice(0, 3)
  return (
    <section className="container-edge py-28 md:py-36">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
        <SectionHeading eyebrow="Rooms & Suites" title={<>Rest, as it should be.</>} />
        <a href="/rooms" className="text-[11px] tracking-widest2 uppercase text-champagne hover:text-ivory transition-colors">
          View All Rooms &rarr;
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {featured.map((room, i) => (
          <RoomCard key={room.slug} room={room} onView={onView} index={i} />
        ))}
      </div>
    </section>
  )
}
