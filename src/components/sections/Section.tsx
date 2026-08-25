import { cn } from '@/utilities/ui'
import React from 'react'

type SectionProps = {
  children: React.ReactNode
  className?: string
  id?: string
  /** Softer canvas band */
  muted?: boolean
}

export function Section({ children, className, id, muted }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'py-16 md:py-20 lg:py-24',
        muted && 'bg-secondary',
        className,
      )}
    >
      <div className="container">{children}</div>
    </section>
  )
}

type SectionHeaderProps = {
  eyebrow?: string
  heading: string
  description?: string
  className?: string
}

export function SectionHeader({ eyebrow, heading, description, className }: SectionHeaderProps) {
  return (
    <div className={cn('mb-10 max-w-2xl md:mb-12', className)}>
      {eyebrow ? (
        <p className="mb-3 type-caption font-medium text-muted-foreground">{eyebrow}</p>
      ) : null}
      <h2 className="type-display-md text-foreground">{heading}</h2>
      {description ? (
        <p className="mt-3 type-body-lg text-muted-foreground">{description}</p>
      ) : null}
    </div>
  )
}
