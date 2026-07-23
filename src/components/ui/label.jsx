import React from 'react'

export function Label({ children, className = '', htmlFor, ...props }) {
  return (
    <label htmlFor={htmlFor} className={`text-sm font-medium text-white ${className}`} {...props}>
      {children}
    </label>
  )
}
