import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const links = [
  { href: '#about', label: 'About' },
  { href: '#education', label: 'Education' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', fn, { passive: true })
    fn()
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const handleLink = () => setOpen(false)

  const scrollTo = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + scrollY - 72, behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.inner}>
          <a href="#hero" className={styles.logo} onClick={e => scrollTo(e, '#hero')}>
            Arvinder <span>Mundra</span>
          </a>
          <ul className={styles.links}>
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href} onClick={e => scrollTo(e, l.href)}>{l.label}</a>
              </li>
            ))}
          </ul>
          <div className={styles.right}>
            <span className={styles.badge}>
              <span className={styles.dot} />
              Open to Work
            </span>
            <button
              className={`${styles.hamburger} ${open ? styles.open : ''}`}
              onClick={() => setOpen(v => !v)}
              aria-label="Menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>
      <nav className={`${styles.mobile} ${open ? styles.mobileOpen : ''}`}>
        {links.map(l => (
          <a key={l.href} href={l.href} onClick={e => { scrollTo(e, l.href); handleLink() }}>{l.label}</a>
        ))}
      </nav>
    </>
  )
}
