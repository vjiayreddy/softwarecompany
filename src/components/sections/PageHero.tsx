import { Button } from '@/components/ui/button'
import type { MockLink } from '@/mock/types'
import Link from 'next/link'
import React from 'react'

type PageHeroProps = {
  brand?: string
  eyebrow?: string
  headline: string
  support?: string
  primaryCta?: MockLink
  secondaryCta?: MockLink
  /** Dominant visual plane — full-bleed style band under copy */
  showVisual?: boolean
}

export function PageHero({
  brand,
  eyebrow,
  headline,
  support,
  primaryCta,
  secondaryCta,
  showVisual = true,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="container relative z-10 py-16 md:py-24 lg:py-28">
        {brand ? (
          <p className="mb-4 type-heading-md font-medium tracking-tight text-foreground">
            <span className="mr-2 inline-block size-2 rounded-full bg-primary align-middle" aria-hidden />
            {brand}
          </p>
        ) : null}
        {eyebrow && !brand ? (
          <p className="mb-3 type-caption font-medium text-muted-foreground">{eyebrow}</p>
        ) : null}
        <h1 className="max-w-3xl type-display-xxl text-foreground">{headline}</h1>
        {support ? (
          <p className="mt-5 max-w-xl type-body-lg text-muted-foreground">{support}</p>
        ) : null}
        {(primaryCta || secondaryCta) && (
          <div className="mt-8 flex flex-wrap gap-3">
            {primaryCta ? (
              <Button asChild size="lg">
                <Link href={primaryCta.href}>{primaryCta.label}</Link>
              </Button>
            ) : null}
            {secondaryCta ? (
              <Button asChild size="lg" variant="outline">
                <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
              </Button>
            ) : null}
          </div>
        )}
      </div>
      {showVisual ? (
        <div
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-2/5 bg-gradient-to-br from-zf-hairline-cool via-secondary to-primary/20 lg:block"
          aria-hidden
        />
      ) : null}
    </section>
  )
}
