import { Button } from '@/components/ui/button'
import type { MockCaseStudy } from '@/mock/types'
import Link from 'next/link'
import React from 'react'

import { Section, SectionHeader } from './Section'

type CaseStudyShowcaseProps = {
  heading?: string
  description?: string
  caseStudies: MockCaseStudy[]
}

export function CaseStudyShowcase({
  heading = 'Selected work',
  description,
  caseStudies,
}: CaseStudyShowcaseProps) {
  return (
    <Section muted>
      <SectionHeader heading={heading} description={description} />
      <ul className="grid gap-10 lg:grid-cols-2">
        {caseStudies.map((study) => (
          <li key={study.slug} className="flex flex-col gap-4">
            <div className="aspect-[16/10] bg-zf-hairline-cool" aria-hidden />
            <div>
              <p className="type-caption text-muted-foreground">
                {study.client} · {study.industry}
              </p>
              <h3 className="mt-2 type-heading-lg text-foreground">
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="hover:text-primary-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {study.title}
                </Link>
              </h3>
              <p className="mt-3 type-body-md text-muted-foreground">{study.summary}</p>
              {study.results.length > 0 ? (
                <ul className="mt-4 flex flex-wrap gap-6">
                  {study.results.slice(0, 3).map((result) => (
                    <li key={result.label}>
                      <p className="type-heading-md text-foreground">{result.metric}</p>
                      <p className="type-caption text-muted-foreground">{result.label}</p>
                    </li>
                  ))}
                </ul>
              ) : null}
              <Button asChild variant="link" className="mt-4 h-auto px-0">
                <Link href={`/case-studies/${study.slug}`}>Read case study</Link>
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
