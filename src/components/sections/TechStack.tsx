import type { MockTechItem } from '@/mock/types'
import React from 'react'

import { Section, SectionHeader } from './Section'

type TechStackProps = {
  heading?: string
  description?: string
  items: Pick<MockTechItem, 'label' | 'blurb'>[] | { label: string; blurb?: string }[]
}

export function TechStack({
  heading = 'Technologies',
  description,
  items,
}: TechStackProps) {
  return (
    <Section muted>
      <SectionHeader heading={heading} description={description} />
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {items.map((item) => (
          <li
            key={item.label}
            className="border border-border bg-background p-4"
          >
            <p className="type-body-md font-medium text-foreground">{item.label}</p>
            {'blurb' in item && item.blurb ? (
              <p className="mt-1 type-caption text-muted-foreground">{item.blurb}</p>
            ) : null}
          </li>
        ))}
      </ul>
    </Section>
  )
}
