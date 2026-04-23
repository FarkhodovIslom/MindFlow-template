
import React from 'react'
import { motion } from 'framer-motion'

export default function SectionTitle({
  title,
  subtitle,
  alignment = 'center',
  className = '',
}) {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className={`mb-12 md:mb-16 ${alignmentClasses[alignment]} ${className}`}
    >
      {subtitle && (
        <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-3">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground leading-tight">
        {title}
      </h2>
    </motion.div>
  )
}
