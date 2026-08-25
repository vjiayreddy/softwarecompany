import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'

import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'

export async function Footer() {
  const footerData = await getCachedGlobal('footer', 1)()

  const navItems = footerData?.navItems || []

  return (
    <footer className="mt-auto border-t border-border bg-background text-muted-foreground">
      <div className="container flex flex-col gap-8 py-16 md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col gap-3">
          <Link className="inline-flex w-fit items-center" href="/">
            <Logo />
          </Link>
          <p className="type-caption max-w-xs text-muted-foreground">
            Software consultancy for startups, growth companies, and enterprises.
          </p>
        </div>

        <div className="flex flex-col-reverse items-start gap-6 md:flex-row md:items-center">
          <ThemeSelector />
          <nav className="flex flex-col gap-3 md:flex-row md:gap-6">
            {navItems.map(({ link }, i) => {
              return (
                <CMSLink
                  className="type-caption text-muted-foreground hover:text-foreground"
                  key={i}
                  {...link}
                />
              )
            })}
          </nav>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container py-4">
          <p className="type-micro text-zf-ink-mute-2">
            © {new Date().getFullYear()} Zeftrosoft. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
