import { AnimatePresence, motion } from 'framer-motion'

export default function RoomModal({ room, onClose, onReserve }) {
  return (
    <AnimatePresence>
      {room && (
        <motion.div
          className="fixed inset-0 z-[150] flex items-end sm:items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            className="absolute inset-0 bg-ink/90 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full sm:max-w-4xl max-h-[92svh] overflow-y-auto bg-ink border hairline sm:mx-6"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-5 top-5 z-20 h-10 w-10 flex items-center justify-center rounded-full bg-ink/70 border hairline text-ivory text-xl"
            >
              &times;
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="h-64 md:h-full">
                <img src={room.image} alt={room.name} className="h-full w-full object-cover" />
              </div>
              <div className="p-8 sm:p-12">
                <div className="text-[11px] tracking-widest2 uppercase text-champagne mb-3">
                  {room.view}
                </div>
                <h3 className="font-serif text-4xl text-ivory">{room.name}</h3>
                <p className="mt-5 text-stone leading-relaxed">{room.longDescription}</p>

                <div className="mt-8 grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="text-stone text-xs">Size</div>
                    <div className="text-ivory mt-1">{room.size}</div>
                  </div>
                  <div>
                    <div className="text-stone text-xs">Occupancy</div>
                    <div className="text-ivory mt-1">{room.guests}</div>
                  </div>
                  <div>
                    <div className="text-stone text-xs">Bed</div>
                    <div className="text-ivory mt-1">{room.bed}</div>
                  </div>
                </div>

                <div className="mt-8">
                  <div className="text-[11px] tracking-widest2 uppercase text-stone mb-3">Amenities</div>
                  <ul className="grid grid-cols-2 gap-y-2 text-sm text-ivory/85">
                    {room.amenities.map((a) => (
                      <li key={a} className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-champagne" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-10 flex items-center justify-between border-t hairline pt-6">
                  <div>
                    <div className="text-stone text-xs">From</div>
                    <div className="font-serif text-2xl text-champagne">${room.price} / night</div>
                  </div>
                  <button
                    onClick={() => onReserve(room)}
                    className="bg-champagne px-7 py-3.5 text-[11px] tracking-widest2 uppercase text-ink hover:bg-ivory transition-colors"
                  >
                    Reserve This Room
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
