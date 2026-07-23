import React from 'react'
import { Link } from 'react-router-dom'

export function Button({ children, className = '', ...props }) {
  return (
    <button className={`px-5 py-3 rounded-xl bg-blue-600 text-white font-semibold transition hover:bg-blue-700 ${className}`} {...props}>
      {children}
    </button>
  )
}

export default function AmberButton({ children, className = '', variant = 'primary', size = 'md', arrow = false, to, href, ...props }) {
  const base = 'inline-flex items-center justify-center rounded-full font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2'
  const variants = {
    primary: 'bg-amber text-white hover:bg-amber/90',
    dark: 'bg-carbon text-white border border-white/15 hover:bg-white hover:text-carbon',
    outline: 'border border-white/15 text-white hover:bg-white/5',
  }
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 py-3 text-sm',
    lg: 'px-6 py-4 text-base',
  }
  const content = (
    <span className={`${base} ${variants[variant] ?? variants.primary} ${sizes[size] ?? sizes.md} ${className}`} {...props}>
      {children}
      {arrow && <span className="ml-2 text-xs">→</span>}
    </span>
  )

  if (to) {
    return <Link to={to}>{content}</Link>
  }

  if (href) {
    return (
      <a href={href} className="inline-block">
        {content}
      </a>
    )
  }

  return <button {...props}>{content}</button>
}
