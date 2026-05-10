import { useState } from 'react'
import FadeIn from './FadeIn'
import styles from './Contact.module.css'

const CONTACT_ITEMS = [
  {
    label: 'Email',
    value: 'arvinder.mundra@tamu.edu',
    href: 'mailto:arvinder.mundra@tamu.edu',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: '+1 (469) 901-4011',
    href: 'tel:+14699014011',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.02z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/arvinder-mundraa',
    href: 'https://www.linkedin.com/in/arvinder-mundraa',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'github.com/arvindermundra',
    href: 'https://github.com/arvindermundra',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
      </svg>
    ),
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return
    setSending(true)
    setError('')
    try {
      const res = await fetch('https://formspree.io/f/xldblzya', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
      })
      const data = await res.json()
      if (res.ok) {
        setSent(true)
        setForm({ name: '', email: '', message: '' })
        setTimeout(() => setSent(false), 5000)
      } else {
        setError(data?.errors?.[0]?.message || 'Something went wrong. Please try again.')
      }
    } catch {
      setError('Network error. Please try again.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact">
      <div className="wrap">
        <FadeIn><span className="sec-label">07 — Contact</span></FadeIn>
        <FadeIn delay={0.06}><h2 className="sec-title">Get in <span>Touch</span></h2></FadeIn>
        <FadeIn delay={0.1}>
          <p className={styles.sub}>
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
          </p>
        </FadeIn>

        <div className={styles.mainContent}>
          {/* Icon-based Contact */}
          <FadeIn delay={0.12}>
            <div className={styles.contactIcons}>
              {CONTACT_ITEMS.map((ci, idx) => (
                <a 
                  key={ci.label} 
                  href={ci.href} 
                  target={ci.href.startsWith('http') ? '_blank' : undefined} 
                  rel="noopener noreferrer" 
                  className={styles.iconLink}
                  title={`${ci.label}: ${ci.value}`}
                  style={{ '--delay': `${idx * 0.06}s` }}
                >
                  <div className={styles.iconBg}>{ci.icon}</div>
                  <div className={styles.tooltip}>{ci.label}</div>
                </a>
              ))}
            </div>
          </FadeIn>

          {/* Contact Form */}
          <FadeIn delay={0.18}>
            <div className={`card ${styles.formCard}`}>
              <div className={styles.cardTitle}>Message</div>
              <form onSubmit={handleSubmit} noValidate>
                <div className={styles.fgrp}>
                  <label htmlFor="fn">Name</label>
                  <input id="fn" type="text" className={styles.finput} placeholder="Your full name" value={form.name} onChange={e => setForm(v => ({ ...v, name: e.target.value }))} required />
                </div>
                <div className={styles.fgrp}>
                  <label htmlFor="fe">Email</label>
                  <input id="fe" type="email" className={styles.finput} placeholder="your@email.com" value={form.email} onChange={e => setForm(v => ({ ...v, email: e.target.value }))} required />
                </div>
                <div className={styles.fgrp}>
                  <label htmlFor="fm">Message</label>
                  <textarea id="fm" className={styles.ftarea} placeholder="Tell me about the opportunity or project…" value={form.message} onChange={e => setForm(v => ({ ...v, message: e.target.value }))} required />
                </div>
                <button type="submit" className={styles.fsub} disabled={sending}>
                  {sending ? 'Sending…' : 'Send Message'}
                </button>
                {sent && <div className={styles.fsuccess}>Message received — I'll get back to you within 24 hours.</div>}
                {error && <div className={styles.ferror}>{error}</div>}
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
