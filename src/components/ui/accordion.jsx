import { ChevronDown } from 'lucide-react'
import React, { createContext, useContext, useMemo, useState } from 'react'

const AccordionContext = createContext(null)

function useAccordionContext() {
  const context = useContext(AccordionContext)
  if (!context) {
    throw new Error('Accordion components must be used within an Accordion')
  }
  return context
}

export function Accordion({ children, className = '', type = 'single', collapsible = false }) {
  const [openValue, setOpenValue] = useState(type === 'multiple' ? [] : null)

  const value = useMemo(
    () => ({
      openValue,
      type,
      collapsible,
      toggle(value) {
        if (type === 'multiple') {
          setOpenValue((current) =>
            current.includes(value) ? current.filter((item) => item !== value) : [...current, value]
          )
          return
        }

        setOpenValue((current) => {
          if (current === value) {
            return collapsible ? null : current
          }
          return value
        })
      },
    }),
    [collapsible, openValue, type]
  )

  return (
    <AccordionContext.Provider value={value}>
      <div className={`space-y-3 ${className}`}>{children}</div>
    </AccordionContext.Provider>
  )
}

export function AccordionItem({ children, value, className = '' }) {
  return (
    <AccordionItemValueContext.Provider value={value}>
      <div className={`rounded-md border border-white/10 bg-card p-5 ${className}`}>{children}</div>
    </AccordionItemValueContext.Provider>
  )
}

export function AccordionTrigger({ children, value, className = '' }) {
  const { openValue, type, toggle } = useAccordionContext()
  const itemValue = useContext(AccordionItemValueContext)
  const currentValue = value ?? itemValue
  const isOpen = type === 'multiple' ? openValue.includes(currentValue) : openValue === currentValue

  return (
    <button
      type="button"
      onClick={() => toggle(currentValue)}
      className={`w-full flex items-center justify-between text-left cursor-pointer font-semibold ${className}`}
    >
      <span>{children}</span>
      <span className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
        <ChevronDown size={20} />
      </span>
    </button>
  )
}

export function AccordionContent({ children, className = '' }) {
  const { openValue, type } = useAccordionContext()
  const value = useContext(AccordionItemValueContext)
  const isOpen = type === 'multiple' ? openValue.includes(value) : openValue === value

  if (!isOpen) return null

  return <div className={`mt-3 text-silver ${className}`}>{children}</div>
}

const AccordionItemValueContext = createContext(null)

export function AccordionItemWrapper({ children, value, className = '' }) {
  return (
    <AccordionItemValueContext.Provider value={value}>
      <AccordionItem value={value} className={className}>{children}</AccordionItem>
    </AccordionItemValueContext.Provider>
  )
}
