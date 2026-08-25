import { Button } from '@/components/ui/button'
import type { MockLink } from '@/mock/types'
import Link from 'next/link'
import React from 'react'

import { Section } from './Section'

type LeadCaptureProps = {
  heading: string
  body?: string
  cta: MockLink
}

export function LeadCapture({ heading, body, cta }: LeadCaptureProps) {
  return (
    <Section>
      <div className="flex flex-col gap-6 border border-border bg-secondary p-8 md:flex-row md:items-end md:justify-between md:p-12">
        <div className="max-w-xl">
          <h2 className="type-display-md text-foreground">{heading}</h2>
          {body ? <p className="mt-3 type-body-lg text-muted-foreground">{body}</p> : null}
        </div>
        <Button asChild size="lg">
          <Link href={cta.href}>{cta.label}</Link>
        </Button>
      </div>
    </Section>
  )
}
