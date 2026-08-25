import type { MockLogoItem } from '@/mock/types'
import React from 'react'

import { Section, SectionHeader } from './Section'

type LogoCloudProps = {
  heading?: string
  logos: MockLogoItem[]
}

export function LogoCloud({ heading, logos }: LogoCloudProps) {
  return (
    <Section muted>
      {heading ? <SectionHeader heading={heading} /> : null}
      <ul className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6 md:gap-8">
        {logos.map((logo) => (
          <li
            key={logo.label}
            className="flex h-14 items-center justify-center border border-border bg-background px-3 type-caption font-medium text-muted-foreground"
          >
            {logo.label}
          </li>
        ))}
      </ul>
    </Section>
  )
}
