import type { MockTeamMember } from '@/mock/types'
import Link from 'next/link'
import React from 'react'

import { Section, SectionHeader } from './Section'

type TeamGridProps = {
  heading?: string
  description?: string
  members: MockTeamMember[]
}

export function TeamGrid({
  heading = 'Team',
  description,
  members,
}: TeamGridProps) {
  return (
    <Section>
      <SectionHeader heading={heading} description={description} />
      <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {members.map((member) => (
          <li key={member.slug}>
            <div className="aspect-square bg-zf-hairline-cool" aria-hidden />
            <h3 className="mt-4 type-heading-md text-foreground">
              <Link
                href={`/team/${member.slug}`}
                className="hover:text-primary-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {member.name}
              </Link>
            </h3>
            <p className="type-caption text-muted-foreground">{member.role}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
