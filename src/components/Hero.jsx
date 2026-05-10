import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import styles from './Hero.module.css'

const ROLES = ['a Software Engineer', 'a Full-Stack Developer', 'a Data Scientist', 'an ML Engineer']
const RESUME = 'https://drive.google.com/file/d/1IW7lqj1Q-AEanlkmxJ9QQCoXE1Kk49Zo/view?usp=drive_link'

const TECH_BADGES = ['Java', 'Python', 'Spring Boot', 'GCP', 'ML']

function Typewriter() {
  const [text, setText] = useState('')
  const [wi, setWi] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = ROLES[wi]
    let timeout
    if (!deleting) {
      if (text.length < word.length) {
        timeout = setTimeout(() => setText(word.slice(0, text.length + 1)), 85)
      } else {
        timeout = setTimeout(() => setDeleting(true), 1900)
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(word.slice(0, text.length - 1)), 45)
      } else {
        setDeleting(false)
        setWi(i => (i + 1) % ROLES.length)
      }
    }
    return () => clearTimeout(timeout)
  }, [text, wi, deleting])

  return (
    <span className={styles.tw}>
      {text}<span className={styles.cursor} />
    </span>
  )
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] }
})

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className="wrap">
        <div className={styles.grid}>
          {/* Left */}
          <div>
            <motion.div className={styles.eyebrow} {...fadeUp(0)}>
              Software Engineer &amp; Data Scientist
            </motion.div>
            <motion.h1 className={styles.name} {...fadeUp(0.08)}>
              Arvinder<br /><em>Mundra.</em>
            </motion.h1>
            <motion.div className={styles.roleLine} {...fadeUp(0.16)}>
              <span className={styles.rolePrefix}>I'm&nbsp;</span>
              <Typewriter />
            </motion.div>
            <motion.div className={styles.statusBadge} {...fadeUp(0.22)}>
              🎓 MS Data Science @ Texas A&amp;M
            </motion.div>
            <motion.p className={styles.bio} {...fadeUp(0.24)}>
              I architect <strong>scalable backends and data-driven systems</strong> using Java, Spring Boot, Python, and GCP — turning complex engineering problems into measurable business impact.
            </motion.p>
            <motion.div className={styles.seek} {...fadeUp(0.28)}>
              <span className={styles.seekDot} />
              Actively seeking Summer 2026 Internships &amp; Fall 2026 Co-ops
            </motion.div>
            <motion.div className={styles.ctas} {...fadeUp(0.32)}>
              <a href={RESUME} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download Resume
              </a>
              <a href="#projects" className="btn btn-outline">View Projects</a>
            </motion.div>
            <motion.div className={styles.socials} {...fadeUp(0.38)}>
              <a href="https://www.linkedin.com/in/arvinder-mundraa" target="_blank" rel="noopener noreferrer" className={styles.socLink} aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a href="https://github.com/arvindermundra" target="_blank" rel="noopener noreferrer" className={styles.socLink} aria-label="GitHub">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
              </a>
              <a href="mailto:arvinder.mundra@tamu.edu" className={styles.socLink} aria-label="Email">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Right */}
          <motion.div className={styles.photoCol} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }}>
            <div className={styles.photoGlow} />
            <div className={styles.photoWrap}>
              <img
                src="https://arvindermundraa.github.io/ArvinderMundra/assets/images/Edited_10-10Feb_12-16-55.jpg"
                alt="Arvinder Mundra"
                loading="eager"
              />
            </div>
            {TECH_BADGES.map((badge, i) => (
              <span
                key={badge}
                className={styles.floatBadge}
                style={{
                  animationDelay: `${i * 0.4}s`,
                  '--fx': `${[-20, 22, -18, 24, -12][i]}px`,
                  '--fy': `${[30, 80, 150, 220, 280][i]}px`,
                }}
              >
                {badge}
              </span>
            ))}
            <div className={styles.photoStrip}>
              <div className={styles.stripLabel}>Based in</div>
              <div className={styles.stripValue}>College Station, TX</div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className={styles.scrollCue}>
        <span>scroll</span>
        <span className={styles.scrollArrow} />
      </div>
    </section>
  )
}
