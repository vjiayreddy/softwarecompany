import type { MockProcessStep } from '@/mock/types'
import React from 'react'

import { Section, SectionHeader } from './Section'

type ProcessStepsProps = {
  heading?: string
  description?: string
  steps: MockProcessStep[]
}

export function ProcessSteps({
  heading = 'How we work',
  description,
  steps,
}: ProcessStepsProps) {
  return (
    <Section>
      <SectionHeader heading={heading} description={description} />
      <ol className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <li key={step.title} className="border-t border-border pt-6">
            <p className="type-caption font-medium text-muted-foreground">
              {String(index + 1).padStart(2, '0')}
            </p>
            <h3 className="mt-2 type-heading-lg text-foreground">{step.title}</h3>
            <p className="mt-3 type-body-md text-muted-foreground">{step.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
