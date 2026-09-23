import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

export default function Navbar({ onBookClick }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { to: '/', label: 'Home' },
    { to: '/rooms', label: 'Stay' },
    { to: '/experience', label: 'Dine & Experience' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[70] transition-colors duration-500 ${
        scrolled ? 'bg-ink/85 backdrop-blur-md border-b hairline' : 'bg-transparent'
      }`}
    >
      <div className="container-edge flex items-center justify-between py-5">
        <Link to="/" className="leading-none" data-cursor="button">
          <div className="font-serif text-lg tracking-[0.2em] text-ivory">AURELIA</div>
          <div className="text-[9px] tracking-widest2 text-stone mt-0.5">GRAND HOTEL</div>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              data-cursor="button"
              className={({ isActive }) =>
                `text-[11px] tracking-widest2 uppercase transition-colors ${
                  isActive ? 'text-champagne' : 'text-ivory/80 hover:text-ivory'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <button
          onClick={onBookClick}
          data-cursor="button"
          className="hidden lg:block border border-champagne/70 px-6 py-2.5 text-[11px] tracking-widest2 uppercase text-champagne hover:bg-champagne hover:text-ink transition-colors duration-300"
        >
          Book Your Stay
        </button>

        <button
          className="lg:hidden flex flex-col gap-1.5 w-7"
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
        >
          <span className="h-px w-full bg-ivory" />
          <span className="h-px w-full bg-ivory" />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-ink lg:hidden"
          >
            <div className="container-edge flex items-center justify-between py-5">
              <span className="font-serif text-lg tracking-[0.2em] text-ivory">AURELIA</span>
              <button aria-label="Close menu" onClick={() => setMenuOpen(false)} className="text-2xl text-ivory">
                &times;
              </button>
            </div>
            <motion.div
              className="container-edge mt-16 flex flex-col gap-8"
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.06 } } }}
            >
              {links.map((l) => (
                <motion.div
                  key={l.to}
                  variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
                >
                  <NavLink
                    to={l.to}
                    onClick={() => setMenuOpen(false)}
                    className="font-serif text-4xl text-ivory"
                  >
                    {l.label}
                  </NavLink>
                </motion.div>
              ))}
              <button
                onClick={() => {
                  setMenuOpen(false)
                  onBookClick()
                }}
                className="mt-4 border border-champagne/70 px-6 py-4 text-[11px] tracking-widest2 uppercase text-champagne text-left"
              >
                Book Your Stay
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
