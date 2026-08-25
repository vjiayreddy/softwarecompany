import type { MockStat } from '@/mock/types'
import React from 'react'

import { Section } from './Section'

type StatsRowProps = {
  stats: MockStat[]
}

export function StatsRow({ stats }: StatsRowProps) {
  return (
    <Section>
      <ul className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-10">
        {stats.map((stat) => (
          <li key={stat.label}>
            <p className="type-display-lg text-foreground">{stat.value}</p>
            <p className="mt-2 type-caption text-muted-foreground">{stat.label}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
