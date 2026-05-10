import FadeIn from './FadeIn'
import styles from './Skills.module.css'

const groups = [
  {
    name: 'Languages',
    desc: 'Programming & scripting',
    variant: 'chip-coral',
    skills: ['Python', 'Java', 'SQL', 'TypeScript', 'Go', 'Scala', 'R', 'C++', 'Bash/Shell'],
  },
  {
    name: 'Data Engineering',
    desc: 'Pipelines, streaming & modeling',
    variant: 'chip-sky',
    skills: ['Apache Spark', 'PySpark', 'Apache Kafka', 'Apache Airflow', 'dbt', 'ETL/ELT', 'CDC', 'Batch & Streaming', 'Data Modeling', 'Data Quality'],
  },
  {
    name: 'Frameworks & APIs',
    desc: 'Backend & frontend platforms',
    variant: 'chip-violet',
    skills: ['Spring Boot', 'Hibernate', 'gRPC', 'REST APIs', 'GraphQL', 'Node.js', 'React', 'Angular'],
  },
  {
    name: 'Cloud & Databases',
    desc: 'Infrastructure & storage',
    variant: 'chip-sage',
    skills: ['GCP', 'AWS (S3, SQS, Glue)', 'Azure', 'Snowflake', 'BigQuery', 'Databricks', 'PostgreSQL', 'MySQL', 'Oracle SQL', 'Redis', 'MS SQL Server'],
  },
  {
    name: 'DevOps & Observability',
    desc: 'Deployment, tooling & monitoring',
    variant: 'chip-amber',
    skills: ['Docker', 'Kubernetes', 'Terraform', 'Jenkins (CI/CD)', 'Git', 'Power BI', 'SLI/SLO Monitoring', 'Great Expectations', 'Postman', 'Linux/Unix'],
  },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <FadeIn><span className="sec-label">04 — Skills</span></FadeIn>
        <FadeIn delay={0.06}><h2 className="sec-title">Technical <span>Stack</span></h2></FadeIn>
        <div className={styles.layout}>
          {groups.map((g, i) => (
            <FadeIn key={g.name} delay={0.06 + i * 0.07}>
              <div className={styles.group}>
                <div className={styles.label}>
                  <div className={styles.name}>{g.name}</div>
                  <div className={styles.desc}>{g.desc}</div>
                </div>
                <div className={styles.chips}>
                  {g.skills.map(s => (
                    <span key={s} className={`chip ${g.variant}`}>{s}</span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
