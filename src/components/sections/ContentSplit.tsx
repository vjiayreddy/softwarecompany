import { cn } from '@/utilities/ui'
import React from 'react'

import { Section } from './Section'

type ContentSplitProps = {
  eyebrow?: string
  heading: string
  body: string
  aside?: React.ReactNode
  reverse?: boolean
  className?: string
}

export function ContentSplit({
  eyebrow,
  heading,
  body,
  aside,
  reverse,
  className,
}: ContentSplitProps) {
  return (
    <Section className={className}>
      <div
        className={cn(
          'grid items-start gap-10 lg:grid-cols-2 lg:gap-16',
          reverse && 'lg:[&>*:first-child]:order-2',
        )}
      >
        <div>
          {eyebrow ? (
            <p className="mb-3 type-caption font-medium text-muted-foreground">{eyebrow}</p>
          ) : null}
          <h2 className="type-display-md text-foreground">{heading}</h2>
          <p className="mt-4 type-body-lg text-muted-foreground whitespace-pre-line">{body}</p>
        </div>
        <div>{aside ?? <div className="aspect-[4/3] bg-zf-hairline-cool" aria-hidden />}</div>
      </div>
    </Section>
  )
}
