import { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import IntroExperience from './components/IntroExperience.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import CustomCursor from './components/CustomCursor.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import PageTransition from './components/PageTransition.jsx'
import RoomModal from './components/RoomModal.jsx'
import BookingPanel from './components/BookingPanel.jsx'

import Home from './pages/Home.jsx'
import Rooms from './pages/Rooms.jsx'
import Experience from './pages/Experience.jsx'

export default function App() {
  const location = useLocation()
  const [showIntro, setShowIntro] = useState(true)
  const [activeRoom, setActiveRoom] = useState(null)
  const [bookingOpen, setBookingOpen] = useState(false)

  useEffect(() => {
    const seen = sessionStorage.getItem('aurelia-intro-seen')
    if (seen) setShowIntro(false)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  const openBooking = (room) => {
    if (room) setActiveRoom(null)
    setBookingOpen(true)
  }

  return (
    <>
      <CustomCursor />
      <ScrollProgress />

      <AnimatePresence>
        {showIntro && <IntroExperience onEnter={() => setShowIntro(false)} />}
      </AnimatePresence>

      {!showIntro && (
        <div className="min-h-screen flex flex-col">
          <Navbar onBookClick={() => openBooking(null)} />

          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={
                  <PageTransition>
                    <Home onView={setActiveRoom} onBook={() => openBooking(null)} />
                  </PageTransition>
                }
              />
              <Route
                path="/rooms"
                element={
                  <PageTransition>
                    <Rooms onView={setActiveRoom} />
                  </PageTransition>
                }
              />
              <Route
                path="/experience"
                element={
                  <PageTransition>
                    <Experience />
                  </PageTransition>
                }
              />
            </Routes>
          </AnimatePresence>

          <Footer />
        </div>
      )}

      <RoomModal room={activeRoom} onClose={() => setActiveRoom(null)} onReserve={openBooking} />
      <BookingPanel open={bookingOpen} onClose={() => setBookingOpen(false)} presetRoom={activeRoom} />
    </>
  )
}
