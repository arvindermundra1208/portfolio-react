import { motion } from 'framer-motion'

export default function FadeIn({ children, delay = 0, className = '', as = 'div' }) {
  const Tag = motion[as] ?? motion.div
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </Tag>
  )
}
