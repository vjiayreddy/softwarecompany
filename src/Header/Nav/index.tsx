'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, SearchIcon, X } from 'lucide-react'

import type { MockLink, MockNavItem } from '@/mock/types'
import { Button } from '@/components/ui/button'
import { cn } from '@/utilities/ui'

type HeaderNavProps = {
  primaryNav: MockNavItem[]
  cta: MockLink
}

export const HeaderNav: React.FC<HeaderNavProps> = ({ primaryNav, cta }) => {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
        {primaryNav.map((item) => {
          const active = pathname === item.href || pathname.startsWith(`${item.href}/`)
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'px-2.5 py-1.5 type-body-md font-medium text-foreground rounded-[6px] hover:bg-secondary',
                active && 'underline underline-offset-4',
              )}
            >
              {item.label}
            </Link>
          )
        })}
        <Link
          href="/search"
          className="ml-1 inline-flex size-9 items-center justify-center rounded-[6px] text-foreground hover:bg-secondary"
        >
          <span className="sr-only">Search</span>
          <SearchIcon className="size-5" />
        </Link>
        <Button asChild size="default" variant="default" className="ml-1">
          <Link href={cta.href}>{cta.label}</Link>
        </Button>
      </nav>

      <div className="flex items-center gap-2 lg:hidden">
        <Button asChild size="sm" variant="default" className="hidden sm:inline-flex">
          <Link href={cta.href}>{cta.label}</Link>
        </Button>
        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-[6px] text-foreground hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="fixed inset-x-0 top-[65px] bottom-0 z-30 overflow-y-auto border-t border-border bg-background lg:hidden"
        >
          <nav className="container flex flex-col gap-1 py-6" aria-label="Mobile primary">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-[6px] px-3 py-3 type-heading-md text-foreground hover:bg-secondary"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/search"
              className="rounded-[6px] px-3 py-3 type-heading-md text-foreground hover:bg-secondary"
            >
              Search
            </Link>
            <Button asChild size="lg" className="mt-4 w-full sm:hidden">
              <Link href={cta.href}>{cta.label}</Link>
            </Button>
          </nav>
        </div>
      ) : null}
    </>
  )
}
