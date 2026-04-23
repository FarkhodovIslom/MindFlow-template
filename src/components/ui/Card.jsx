
import React from 'react'
import { motion } from 'framer-motion'

export default function Card({
  children,
  className = '',
  hover = true,
  padding = 'default',
  ...props
}) {
  const paddingClasses = {
    none: '',
    default: 'p-6',
    lg: 'p-8',
  }

  return (
    <motion.div
      whileHover={hover ? { y: -4, boxShadow: '0 20px 40px -12px rgba(0,0,0,0.08)' } : {}}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`
        bg-white rounded-2xl border border-foreground/5
        ${paddingClasses[padding]}
        ${hover ? 'transition-all duration-300 hover:shadow-xl' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.div>
  )
}
