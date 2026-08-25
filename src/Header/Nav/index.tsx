'use client'

import React from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { SearchIcon } from 'lucide-react'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []

  return (
    <nav className="flex items-center gap-1 sm:gap-3">
      {navItems.map(({ link }, i) => {
        return (
          <CMSLink
            key={i}
            {...link}
            appearance="link"
            className="hidden px-2 type-body-md font-medium text-foreground sm:inline-flex"
          />
        )
      })}
      <Link
        href="/search"
        className="inline-flex size-9 items-center justify-center rounded-[6px] text-foreground hover:bg-secondary"
      >
        <span className="sr-only">Search</span>
        <SearchIcon className="size-5" />
      </Link>
      <Button asChild size="default" variant="default">
        <Link href="/contact">Talk to us</Link>
      </Button>
    </nav>
  )
}
