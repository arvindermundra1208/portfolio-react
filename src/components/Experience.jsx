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
    role: 'Software Engineer',
    company: 'Dun & Bradstreet · Hyderabad, India',
    date: 'Aug 2023 – Jul 2025',
    bullets: [
      <>Enhanced CDP backend (Java, Spring, Hibernate, MySQL) serving <strong>10M+ business records</strong></>,
      <>Built SLIs in Spring Boot microservices, reducing MTTR by <strong>~35%</strong></>,
      <>Led GCP migration and MSV login flow, cutting infrastructure costs by <strong>20%</strong></>,
      <>Custom dashboards for error pattern detection, reducing MTTD by <strong>40%</strong></>,
      'Upgraded SPCA and Finance Analytics modules; refined credit scoring via financial dataset analysis',
    ],
    chips: ['Java', 'Spring Boot', 'Hibernate', 'MySQL', 'GCP', 'Microservices', 'Python'],
  },
  {
    role: 'Business Intelligence Intern',
    company: 'Call Health Services Pvt. Ltd. · Hyderabad, India',
    date: 'Mar 2023 – Apr 2023',
    bullets: [
      'RFM analysis and customer retention modeling using Python and Advanced Excel',
      'Power BI dashboards connecting SQL datasets across 5+ departments',
      <>Automated data pipelines with RESTful APIs + MedSpaCy NLP, reducing manual processing by <strong>60%</strong></>,
    ],
    chips: ['Python', 'Power BI', 'SQL', 'NLP', 'MedSpaCy', 'REST APIs'],
  },
  {
    role: 'Executive Lead, AI-ML Team',
    company: 'My Equation · Remote',
    date: 'Jul 2021 – Mar 2022',
    bullets: [
      'Architected end-to-end AI/ML solutions for STEM applications (Python, TensorFlow, Django)',
      'Designed scalable data pipelines and ML frameworks across product verticals',
      <>Led 13+ technical tracks; trained <strong>1,200+ learners</strong> on regression, neural networks, YOLOv5, BERT</>,
    ],
    chips: ['Python', 'TensorFlow', 'Django', 'YOLOv5', 'BERT'],
  },
  {
    role: 'Software Engineering Intern',
    company: 'Amara Raja Group · Tirupati, India',
    date: 'Jun 2021 – Jul 2021',
    bullets: [
      'Built UI + database system (Visual Studio, SQL Server, ASP.NET) for UPS battery data management',
      'Implemented role-based access controls with data validation logic',
    ],
    chips: ['ASP.NET', 'SQL Server', 'HTML', 'Visual Studio'],
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
