import FadeIn from './FadeIn'
import styles from './Experience.module.css'

const jobs = [
  {
    role: 'Graduate Teaching Assistant',
    company: 'Texas A&M University · College Station, TX',
    date: 'Jan 2026 – Present',
    bullets: [
      'STAT 650 and STAT 302 instruction support — weekly recitations and hands-on lab sessions',
      'Office hours (in-person and online); technical guidance on statistical tools and Big Data workflows',
    ],
    chips: ['STAT 650', 'STAT 302', 'R', 'Python', 'Big Data'],
  },
  {
    role: 'Software Engineer (Data Engineering)',
    company: 'Dun & Bradstreet · Hyderabad, India',
    date: 'Aug 2023 – Jul 2025',
    bullets: [
      <>Architected scalable microservices backend for the Customer Data Platform using Java, Spring Boot, and Hibernate, reducing MySQL query latency by <strong>40%</strong> and sustaining <strong>50,000+ daily</strong> operational requests</>,
      <>Engineered ETL/ELT pipelines in Java and Python to ingest and transform millions of daily records into the Finance Analytics data warehouse, cutting analytical report latency by <strong>45%</strong></>,
      <>Migrated legacy authentication to GCP, redesigning login flow with REST APIs and gRPC — reduced cross-service login latency by <strong>25%</strong></>,
      <>Designed SLI/SLO observability within Spring Boot microservices with automated dynamic alerting, reducing critical incident MTTR by <strong>30%</strong></>,
      <>Built and deployed CI/CD pipelines (Jenkins, Docker, Kubernetes) on GCP enabling autonomous zero-downtime team deployments</>,
    ],
    chips: ['Java', 'Python', 'Spring Boot', 'Hibernate', 'gRPC', 'MySQL', 'PostgreSQL', 'Apache Kafka', 'GCP', 'Docker', 'Kubernetes', 'Jenkins'],
  },
  {
    role: 'Business Intelligence Intern',
    company: 'Call Health Services Pvt. Ltd. · Hyderabad, India',
    date: 'Mar 2023 – Apr 2023',
    bullets: [
      <>Architected async data ingestion pipelines using Python and REST APIs, landing structured healthcare payloads into analytical databases — cut manual data staging time by <strong>85%</strong></>,
      'Built NLP microservice using MedSpaCy to parse and extract clinical entities; designed SQL transformation layers mapped to Power BI dashboards for C-level KPI tracking',
    ],
    chips: ['Python', 'SQL', 'REST APIs', 'Power BI', 'NLP (MedSpaCy)', 'Linux', 'Git'],
  },
  {
    role: 'Executive Lead, Data Pipelines',
    company: 'My Equation · Remote',
    date: 'Jul 2021 – Mar 2022',
    bullets: [
      <>Designed scalable batch processing architectures across 13+ technical learning tracks using Python and cron scheduling, maintaining <strong>99% data integrity</strong> at production endpoints</>,
      <>Drove full-cycle system design from ambiguous requirements to production; mentored <strong>1,200+ participants</strong> on distributed systems, algorithms, and scalable architecture patterns</>,
    ],
    chips: ['Python', 'SQL', 'Bash', 'cron', 'Git', 'Linux'],
  },
]

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <FadeIn><span className="sec-label">03 — Experience</span></FadeIn>
        <FadeIn delay={0.06}><h2 className="sec-title">Work <span>History</span></h2></FadeIn>

        <div className={styles.timeline}>
          {jobs.map((job, i) => (
            <FadeIn key={job.role + job.date} delay={0.06 + i * 0.07}>
              <div className={styles.entry}>
                <div className={styles.node}><div className={styles.dot} /></div>
                <div className={`card ${styles.card}`}>
                  <div className={styles.meta}>
                    <div className={styles.role}>{job.role}</div>
                    <span className={styles.date}>{job.date}</span>
                  </div>
                  <div className={styles.company}>{job.company}</div>
                  <ul className={styles.bullets}>
                    {job.bullets.map((b, bi) => <li key={bi}>{b}</li>)}
                  </ul>
                  <div className={styles.chips}>
                    {job.chips.map(c => <span key={c} className="chip">{c}</span>)}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
