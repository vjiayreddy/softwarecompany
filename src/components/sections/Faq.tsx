'use client'

import type { MockFaqItem } from '@/mock/types'
import React, { useState } from 'react'

import { Section, SectionHeader } from './Section'

type FaqProps = {
  heading?: string
  items: MockFaqItem[]
}

export function Faq({ heading = 'FAQ', items }: FaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <Section muted>
      <SectionHeader heading={heading} />
      <ul className="mx-auto max-w-3xl divide-y divide-border border-y border-border">
        {items.map((item, index) => {
          const open = openIndex === index
          return (
            <li key={item.question}>
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 py-5 text-left type-heading-md text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-expanded={open}
                onClick={() => setOpenIndex(open ? null : index)}
              >
                {item.question}
                <span className="type-body-md text-muted-foreground" aria-hidden>
                  {open ? '−' : '+'}
                </span>
              </button>
              {open ? (
                <p className="pb-5 type-body-md text-muted-foreground">{item.answer}</p>
              ) : null}
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
