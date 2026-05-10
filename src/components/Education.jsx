import FadeIn from './FadeIn'
import styles from './Education.module.css'

const schools = [
  {
    school: 'Texas A&M University',
    degree: 'Master of Science in Data Science',
    location: 'College Station, TX',
    date: 'Aug 2025 – May 2027',
    courses: 'ECEN 758 (Data Mining), MATH 677 (Math Foundations of DS), STAT 624 (Big Data Tools), STAT 650 (Statistical Foundations), CSCE 625 (AI), STAT 654 (Statistical Computing), STAT 656 (Applied Analytics)',
  },
  {
    school: 'SRM Institute of Science and Technology',
    degree: 'B.Tech, Electronics & Computer Engineering',
    location: 'Chennai, India',
    date: 'Jun 2019 – May 2023',
    courses: null,
  },
]

export default function Education() {
  return (
    <section id="education">
      <div className="wrap">
        <FadeIn><span className="sec-label">02 — Education</span></FadeIn>
        <FadeIn delay={0.06}><h2 className="sec-title">Academic <span>Background</span></h2></FadeIn>
        <div className={styles.list}>
          {schools.map((s, i) => (
            <FadeIn key={s.school} delay={0.08 + i * 0.1}>
              <div className={`card ${styles.card}`}>
                <div className={styles.body}>
                  <div className={styles.school}>{s.school}</div>
                  <div className={styles.degree}>{s.degree}</div>
                  <div className={styles.location}>{s.location}</div>
                  {s.courses && (
                    <div className={styles.courses}>
                      <strong>Coursework:</strong> {s.courses}
                    </div>
                  )}
                </div>
                <span className={styles.date}>{s.date}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
