'use client'

import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { MockSite } from '@/mock/types'
import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'

interface HeaderClientProps {
  site: MockSite
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ site }) => {
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  return (
    <header
      className="sticky top-0 z-20 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80"
      {...(theme ? { 'data-theme': theme } : {})}
    >
      <div className="container flex items-center justify-between gap-4 py-4">
        <Link href="/" className="focus-visible:rounded-[6px]">
          <Logo loading="eager" priority="high" />
        </Link>
        <HeaderNav primaryNav={site.primaryNav} cta={site.cta} />
      </div>
    </header>
  )
}
