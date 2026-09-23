import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { rooms } from '../data/rooms.js'

export default function BookingPanel({ open, onClose, presetRoom }) {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ checkIn: '', checkOut: '', guests: '2', roomType: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleClose = () => {
    onClose()
    setTimeout(() => setSubmitted(false), 400)
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-[160] flex justify-end" initial="closed" animate="open" exit="closed">
          <motion.div
            className="absolute inset-0 bg-ink/80 backdrop-blur-sm"
            variants={{ open: { opacity: 1 }, closed: { opacity: 0 } }}
            transition={{ duration: 0.4 }}
            onClick={handleClose}
          />
          <motion.div
            variants={{ open: { x: 0 }, closed: { x: '100%' } }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 h-full w-full sm:w-[460px] bg-ink border-l hairline overflow-y-auto"
          >
            <div className="p-8 sm:p-10">
              <div className="flex items-center justify-between mb-10">
                <div className="font-serif text-2xl text-ivory">Book Your Stay</div>
                <button onClick={handleClose} aria-label="Close" className="text-2xl text-ivory">&times;</button>
              </div>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-[11px] tracking-widest2 uppercase text-stone mb-2">Check-In</label>
                    <input
                      required
                      type="date"
                      value={form.checkIn}
                      onChange={(e) => setForm({ ...form, checkIn: e.target.value })}
                      className="w-full bg-transparent border hairline px-4 py-3 text-ivory focus:outline-none focus:border-champagne"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] tracking-widest2 uppercase text-stone mb-2">Check-Out</label>
                    <input
                      required
                      type="date"
                      value={form.checkOut}
                      onChange={(e) => setForm({ ...form, checkOut: e.target.value })}
                      className="w-full bg-transparent border hairline px-4 py-3 text-ivory focus:outline-none focus:border-champagne"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] tracking-widest2 uppercase text-stone mb-2">Guests</label>
                    <select
                      value={form.guests}
                      onChange={(e) => setForm({ ...form, guests: e.target.value })}
                      className="w-full bg-ink border hairline px-4 py-3 text-ivory focus:outline-none focus:border-champagne"
                    >
                      {[1, 2, 3, 4].map((n) => (
                        <option key={n} value={n}>{n} Guest{n > 1 ? 's' : ''}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] tracking-widest2 uppercase text-stone mb-2">Room Type</label>
                    <select
                      value={form.roomType || presetRoom?.name || ''}
                      onChange={(e) => setForm({ ...form, roomType: e.target.value })}
                      className="w-full bg-ink border hairline px-4 py-3 text-ivory focus:outline-none focus:border-champagne"
                    >
                      <option value="">Select a room</option>
                      {rooms.map((r) => (
                        <option key={r.slug} value={r.name}>{r.name} &mdash; from ${r.price}</option>
                      ))}
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-champagne px-6 py-4 text-[11px] tracking-widest2 uppercase text-ink hover:bg-ivory transition-colors mt-4"
                  >
                    Check Availability
                  </button>
                  <p className="text-xs text-stone leading-relaxed pt-2">
                    This is a concept booking flow. No payment or reservation is processed.
                  </p>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="py-12 text-center"
                >
                  <div className="text-champagne text-[11px] tracking-widest2 uppercase mb-4">Request Received</div>
                  <p className="font-serif text-2xl text-ivory leading-snug">
                    Thank you. Our concierge will confirm availability for your stay shortly.
                  </p>
                  <button
                    onClick={handleClose}
                    className="mt-10 border border-champagne/70 px-7 py-3 text-[11px] tracking-widest2 uppercase text-champagne hover:bg-champagne hover:text-ink transition-colors"
                  >
                    Close
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
