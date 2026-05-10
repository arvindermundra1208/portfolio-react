import FadeIn from './FadeIn'
import styles from './About.module.css'

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <FadeIn><span className="sec-label">01 — About</span></FadeIn>
        <FadeIn delay={0.06}><h2 className="sec-title">Who I <span>Am</span></h2></FadeIn>

        <div className={styles.grid}>
          <div className={styles.bio}>
            <FadeIn delay={0.08}>
              <p>I'm a <strong>Master's student in Data Science at Texas A&M University</strong> and a Graduate Teaching Assistant — driven by the intersection of engineering discipline and data intelligence. I care deeply about systems that are clean in design, reliable in production, and meaningful in impact.</p>
            </FadeIn>
            <FadeIn delay={0.14}>
              <p>My foundation is in <strong>full-stack backend engineering</strong> — Java, Spring Boot, Python, and Django — with a growing specialization in distributed ML pipelines, cloud infrastructure, and statistical modeling.</p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p>At <strong>Dun &amp; Bradstreet</strong>, I delivered Spring Boot microservices serving 10M+ business records, led a GCP migration that reduced infrastructure costs by 20%, and built observability tooling that cut incident response time by 35–40%.</p>
            </FadeIn>
          </div>

          <div className={styles.right}>
            <FadeIn delay={0.12}>
              <div className={styles.statRow}>
                <div className={`card ${styles.statBox}`}>
                  <div className={styles.statN}>2+</div>
                  <div className={styles.statD}>Years Industry<br/>Experience</div>
                </div>
                <div className={`card ${styles.statBox}`}>
                  <div className={styles.statN}>10M+</div>
                  <div className={styles.statD}>Business Records<br/>Served</div>
                </div>
                <div className={`card ${styles.statBox}`}>
                  <div className={styles.statN}>1.2K+</div>
                  <div className={styles.statD}>Learners<br/>Trained</div>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className={`card ${styles.expertCard}`}>
                <div className={styles.expertTitle}>Core Expertise</div>
                {[
                  {
                    icon: <svg viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
                    title: 'Full-Stack Engineering',
                    desc: 'REST APIs, relational databases, modern frontends'
                  },
                  {
                    icon: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 2v4m0 12v4M4.22 4.22l2.83 2.83m9.9 9.9 2.83 2.83M2 12h4m12 0h4M4.22 19.78l2.83-2.83m9.9-9.9 2.83-2.83"/></svg>,
                    title: 'Data & AI Systems',
                    desc: 'Deep learning models, real-time KPI pipelines, ETL'
                  },
                  {
                    icon: <svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
                    title: 'Cloud Infrastructure',
                    desc: 'GCP, Azure, container deployments, observability'
                  }
                ].map(p => (
                  <div key={p.title} className={styles.pillar}>
                    <div className={styles.pillarIcon}>{p.icon}</div>
                    <div>
                      <strong>{p.title}</strong>
                      <span>{p.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
