import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Leadership from './components/Leadership'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  useEffect(() => {
    const dot = document.getElementById('c-dot')
    const ring = document.getElementById('c-ring')
    if (!dot || !ring) return
    let mx = 0, my = 0, rx = 0, ry = 0
    const onMove = (e) => {
      mx = e.clientX; my = e.clientY
      dot.style.left = mx + 'px'; dot.style.top = my + 'px'
    }
    document.addEventListener('mousemove', onMove)
    let raf
    const loop = () => {
      rx += (mx - rx) * 0.13; ry += (my - ry) * 0.13
      ring.style.left = rx + 'px'; ring.style.top = ry + 'px'
      raf = requestAnimationFrame(loop)
    }
    loop()
    const grow = () => { dot.style.width='14px'; dot.style.height='14px'; ring.style.width='44px'; ring.style.height='44px' }
    const shrink = () => { dot.style.width='8px'; dot.style.height='8px'; ring.style.width='30px'; ring.style.height='30px' }
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', grow)
      el.addEventListener('mouseleave', shrink)
    })
    return () => { document.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf) }
  }, [])

  return (
    <>
      <div id="c-dot" />
      <div id="c-ring" />
      <Navbar />
      <main>
        <Hero />
        <hr className="divider" />
        <About />
        <hr className="divider" />
        <Education />
        <hr className="divider" />
        <Experience />
        <hr className="divider" />
        <Skills />
        <hr className="divider" />
        <Projects />
        <hr className="divider" />
        <Leadership />
        <hr className="divider" />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
