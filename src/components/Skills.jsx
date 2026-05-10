import FadeIn from './FadeIn'
import styles from './Skills.module.css'

const groups = [
  {
    name: 'Programming',
    desc: 'Languages & scripting',
    variant: 'chip-coral',
    skills: ['Python', 'Java', 'SQL', 'C++', 'JavaScript', 'R', 'HTML', 'CSS', 'Shell Scripting'],
  },
  {
    name: 'Data & AI',
    desc: 'Analytics & machine learning',
    variant: 'chip-sky',
    skills: ['Machine Learning', 'Statistical Modeling', 'ETL', 'Data Pipelines', 'Data Visualization', 'EDA', 'Data Modeling'],
  },
  {
    name: 'Frameworks',
    desc: 'Libraries & platforms',
    variant: 'chip-violet',
    skills: ['Spring Boot', 'React', 'Angular', 'NumPy', 'Scikit-Learn', 'PyTorch', 'TensorFlow', 'Django'],
  },
  {
    name: 'Cloud & Databases',
    desc: 'Infrastructure & storage',
    variant: 'chip-sage',
    skills: ['GCP', 'AWS', 'Azure', 'MySQL', 'PostgreSQL', 'MongoDB', 'Oracle SQL'],
  },
  {
    name: 'Tools',
    desc: 'Dev & analytics tooling',
    variant: 'chip-amber',
    skills: ['Power BI', 'GitHub', 'Postman', 'Jupyter', 'RStudio', 'Google Colab', 'Excel'],
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
