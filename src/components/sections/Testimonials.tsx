import type { MockTestimonial } from '@/mock/types'
import React from 'react'

import { Section, SectionHeader } from './Section'

type TestimonialsProps = {
  heading?: string
  items: MockTestimonial[]
}

export function Testimonials({ heading = 'What clients say', items }: TestimonialsProps) {
  return (
    <Section>
      <SectionHeader heading={heading} />
      <ul className="grid gap-10 md:grid-cols-2">
        {items.map((item) => (
          <li key={`${item.name}-${item.role}`} className="border-t border-border pt-6">
            <blockquote className="type-body-lg text-foreground">“{item.quote}”</blockquote>
            <footer className="mt-4">
              <p className="type-body-md font-medium text-foreground">{item.name}</p>
              <p className="type-caption text-muted-foreground">{item.role}</p>
            </footer>
          </li>
        ))}
      </ul>
    </Section>
  )
}
