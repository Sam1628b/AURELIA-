import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-ink border-t hairline">
      <div className="container-edge grid grid-cols-1 lg:grid-cols-4 gap-12 py-20">
        <div>
          <div className="font-serif text-xl tracking-[0.2em] text-ivory">AURELIA</div>
          <div className="text-[9px] tracking-widest2 text-stone mt-1">GRAND HOTEL</div>
          <p className="mt-6 text-sm text-stone leading-relaxed max-w-xs">
            A timeless stay, reimagined. 12 Rue de la Cour, Paris.
          </p>
        </div>
        <div>
          <div className="text-[11px] tracking-widest2 uppercase text-champagne mb-5">Explore</div>
          <ul className="space-y-3 text-sm text-ivory/80">
            <li><Link to="/" className="hover:text-ivory">Home</Link></li>
            <li><Link to="/rooms" className="hover:text-ivory">Rooms &amp; Suites</Link></li>
            <li><Link to="/experience" className="hover:text-ivory">Dine &amp; Experience</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-[11px] tracking-widest2 uppercase text-champagne mb-5">Contact</div>
          <ul className="space-y-3 text-sm text-ivory/80">
            <li>+33 1 42 00 00 00</li>
            <li>stay@aureliagrand.com</li>
            <li>Concierge available 24/7</li>
          </ul>
        </div>
        <div>
          <div className="text-[11px] tracking-widest2 uppercase text-champagne mb-5">Follow</div>
          <ul className="space-y-3 text-sm text-ivory/80">
            <li><a href="#" className="hover:text-ivory">Instagram</a></li>
            <li><a href="#" className="hover:text-ivory">Journal</a></li>
          </ul>
        </div>
      </div>
      <div className="container-edge border-t hairline py-6 flex flex-col sm:flex-row justify-between gap-2 text-[11px] text-stone">
        <span>&copy; {new Date().getFullYear()} Aurelia Grand Hotel. All rights reserved.</span>
        <span>Privacy &mdash; Terms</span>
      </div>
    </footer>
  )
}
