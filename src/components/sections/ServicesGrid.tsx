import { Button } from '@/components/ui/button'
import type { MockService } from '@/mock/types'
import Link from 'next/link'
import React from 'react'

import { Section, SectionHeader } from './Section'

type ServicesGridProps = {
  heading?: string
  description?: string
  services: MockService[]
  basePath?: '/services' | '/solutions'
}

export function ServicesGrid({
  heading = 'What we do',
  description,
  services,
  basePath = '/services',
}: ServicesGridProps) {
  return (
    <Section>
      <SectionHeader heading={heading} description={description} />
      <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <li key={service.slug} className="border-t border-border pt-6">
            <p className="type-caption font-medium capitalize text-muted-foreground">
              {service.type}
            </p>
            <h3 className="mt-2 type-heading-lg text-foreground">
              <Link
                href={`${basePath}/${service.slug}`}
                className="hover:text-primary-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {service.title}
              </Link>
            </h3>
            <p className="mt-3 type-body-md text-muted-foreground">{service.summary}</p>
            <Button asChild variant="link" className="mt-4 h-auto px-0">
              <Link href={`${basePath}/${service.slug}`}>Learn more</Link>
            </Button>
          </li>
        ))}
      </ul>
    </Section>
  )
}
