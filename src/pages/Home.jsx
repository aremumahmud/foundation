import Hero from '../components/Hero'
import Statement from '../components/Statement'
import HorizontalScrollSection from '../components/jh'
import VerticalScrollSection from '../components/VerticalScrollSection'
import WhySolution from '../components/WhySolution'
import VideoCarousel from '../components/VideoCarousel'
import ActionSection from '../components/ActionSection'
import { useState, useEffect } from 'react'

const Home = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <>
      <Hero />
      <Statement />
      {isMobile ? <VerticalScrollSection /> : <HorizontalScrollSection />}
      <WhySolution />
      <VideoCarousel />
      <ActionSection />
    </>
  )
}

export default Home
