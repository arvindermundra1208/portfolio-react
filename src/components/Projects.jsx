import { useState } from 'react'
import FadeIn from './FadeIn'
import styles from './Projects.module.css'

const GITHUB_SVG = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
)

const projects = [
  {
    cat: 'ml',
    title: 'Yelp Sentiment Classifier',
    gh: 'https://github.com/arvindermundra/yelp-sentiment-analysis',
    bullets: [
      'BiLSTM in PyTorch with Word2Vec embeddings for multi-class sentiment',
      'Outperformed TF-IDF + Logistic Regression baseline on F1 score',
      'Positive / neutral / negative classification pipeline',
    ],
    chips: ['Python', 'PyTorch', 'BiLSTM', 'NLP', 'Word2Vec'],
  },
  {
    cat: 'ml',
    title: 'LSTM Stock Price Prediction',
    gh: 'https://github.com/arvindermundra/LSTM-Based-Stock-Price-Prediction',
    bullets: [
      'Stacked LSTM in PyTorch for time-series stock forecasting',
      'Feature engineering: RSI, MACD, moving averages',
      'Forecast vs actual overlays with confidence intervals',
    ],
    chips: ['Python', 'PyTorch', 'LSTM', 'Pandas', 'NumPy'],
  },
  {
    cat: 'fullstack',
    title: 'Secure Interactive Banking Platform',
    gh: 'https://github.com/arvindermundra1208',
    bullets: [
      'Angular frontend + Java/Spring Boot backend, multi-tier architecture',
      'Spring Security RBAC, encrypted data, session management',
      'PostgreSQL for high-concurrency transaction handling',
    ],
    chips: ['Angular', 'Spring Boot', 'Java', 'PostgreSQL', 'REST APIs'],
  },
  {
    cat: 'fullstack',
    title: 'Enterprise Inventory & Backend System',
    gh: 'https://github.com/arvindermundra1208',
    bullets: [
      'Relational database redesign for a simulated 1M+ transaction-row engine with advanced indexing & partitioning',
      'PL/SQL stored procedures and triggers for real-time inventory sync — reduced transaction latency by 80%',
      'Optimized physical schema layers and partition keys for high-throughput ETL batch jobs',
    ],
    chips: ['Oracle SQL', 'PL/SQL', 'ETL', 'Partitioning', 'Stored Procedures'],
  },
  {
    cat: 'de',
    title: 'Time-Series Big Data Pipeline',
    gh: 'https://github.com/arvindermundra1208',
    bullets: [
      'Ingested 10+ years of raw historical equity price data using Python and PySpark',
      'Built cleaning, normalization, and feature engineering pipelines producing analytics-ready datasets',
      'Applied data quality checks and schema validation across rolling feature windows for reliable downstream modeling',
    ],
    chips: ['Python', 'PySpark', 'Apache Spark', 'Pandas', 'Feature Engineering', 'Data Quality'],
  },
  {
    cat: 'ml',
    title: 'Customer Segmentation Engine',
    gh: 'https://github.com/arvindermundra/customer-segmentation',
    bullets: [
      'K-Means + DBSCAN on RFM-engineered features',
      'PCA and t-SNE for cluster visualization',
      'Identified high-value customer segments for revenue targeting',
    ],
    chips: ['Python', 'Scikit-Learn', 'K-Means', 'PCA', 'Matplotlib'],
  },
]

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'fullstack', label: 'Full-Stack' },
  { key: 'ml', label: 'Machine Learning' },
  { key: 'de', label: 'Data Engineering' },
]

export default function Projects() {
  const [active, setActive] = useState('all')

  const visible = projects.filter(p => active === 'all' || p.cat === active)

  return (
    <section id="projects">
      <div className="wrap">
        <div className={styles.top}>
          <div>
            <FadeIn><span className="sec-label">05 — Projects</span></FadeIn>
            <FadeIn delay={0.06}><h2 className="sec-title">Featured <span>Work</span></h2></FadeIn>
          </div>
          <FadeIn delay={0.1}>
            <div className={styles.filterRow}>
              {FILTERS.map(f => (
                <button
                  key={f.key}
                  className={`${styles.ftab} ${active === f.key ? styles.on : ''}`}
                  onClick={() => setActive(f.key)}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </FadeIn>
        </div>

        <div className={styles.grid}>
          {visible.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.06}>
              <div className={`card ${styles.card}`}>
                <div className={styles.head}>
                  <span className={`${styles.badge} ${p.cat === 'ml' ? styles.badgeMl : p.cat === 'de' ? styles.badgeDe : styles.badgeFs}`}>
                    {p.cat === 'ml' ? 'Machine Learning' : p.cat === 'de' ? 'Data Engineering' : 'Full-Stack'}
                  </span>
                  <a href={p.gh} target="_blank" rel="noopener noreferrer" className={styles.ghLink} aria-label="GitHub">
                    {GITHUB_SVG}
                  </a>
                </div>
                <div className={styles.title}>{p.title}</div>
                <ul className={styles.bullets}>
                  {p.bullets.map((b, bi) => <li key={bi}>{b}</li>)}
                </ul>
                <div className={styles.chips}>
                  {p.chips.map(c => <span key={c} className="chip">{c}</span>)}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
