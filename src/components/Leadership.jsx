import FadeIn from './FadeIn'
import styles from './Leadership.module.css'

const items = [
  {
    num: '01',
    title: 'Event Coordinator, CSR',
    org: 'Dun & Bradstreet',
    desc: 'Led school bag donation drive (110+ bags), wall painting (10 murals), and tree plantation (150+ saplings). Coordinated 60+ volunteers across all initiatives.',
    link: null,
  },
  {
    num: '02',
    title: 'Workshop Mentor, Cognitive Applications',
    org: 'TechAnalogy',
    desc: '14-day ML/AI workshop. Guided 400+ participants through live instruction and hands-on projects in computer vision, NLP, and applied ML.',
    link: null,
  },
  {
    num: '03',
    title: 'Research Publication — ICIOT 2023',
    org: 'Co-authored',
    desc: '"Classification of Carotid Artery Intima-Media Thickness Ultrasound Images Using Deep Learning"',
    link: {
      href: 'https://scholar.google.com/scholar?q=Classification+of+Carotid+Artery+Intima-Media+Thickness+Ultrasound+Images+Using+Deep+Learning+ICIOT+2023',
      label: 'View on Google Scholar',
    },
  },
  {
    num: '04',
    title: 'Committee Member, Social Services',
    org: 'Aaruush — SRM University',
    desc: "Organized large-scale social welfare projects at SRM's premier national-level technical festival, impacting hundreds of community members.",
    link: null,
  },
]

export default function Leadership() {
  return (
    <section id="leadership">
      <div className="wrap">
        <FadeIn><span className="sec-label">06 — Beyond the Code</span></FadeIn>
        <FadeIn delay={0.06}><h2 className="sec-title">Leadership &amp; <span>Impact</span></h2></FadeIn>
        <div className={styles.grid}>
          {items.map((item, i) => (
            <FadeIn key={item.num} delay={0.06 + i * 0.08}>
              <div className={`card ${styles.card}`}>
                <span className={styles.num}>{item.num}</span>
                <div className={styles.title}>{item.title}</div>
                <div className={styles.org}>{item.org}</div>
                <p className={styles.desc}>{item.desc}</p>
                {item.link && (
                  <a href={item.link.href} target="_blank" rel="noopener noreferrer" className={styles.link}>
                    {item.link.label}
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                  </a>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
