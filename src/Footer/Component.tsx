import { site } from '@/mock/site'
import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { Logo } from '@/components/Logo/Logo'
import Link from 'next/link'
import React from 'react'

/** Track A: chrome from mocks — Payload Footer global wired in Track B. */
export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-auto border-t border-border bg-background text-muted-foreground">
      <div className="container py-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,2fr)] lg:gap-16">
          <div className="flex flex-col gap-4">
            <Link className="inline-flex w-fit items-center" href="/">
              <Logo />
            </Link>
            <p className="max-w-sm type-body-md text-muted-foreground">{site.blurb}</p>
            <a
              href={`mailto:${site.contactEmail}`}
              className="type-caption font-medium text-foreground hover:underline"
            >
              {site.contactEmail}
            </a>
            <ul className="mt-2 flex flex-wrap gap-4">
              {site.socialLinks.map((social) => (
                <li key={social.platform}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="type-caption text-muted-foreground hover:text-foreground"
                  >
                    {social.platform}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {site.footerColumns.map((column) => (
              <div key={column.title}>
                <p className="type-body-md font-medium text-foreground">{column.title}</p>
                <ul className="mt-4 flex flex-col gap-3">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="type-caption text-muted-foreground hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="type-micro text-zf-ink-mute-2">
            © {year} {site.companyName}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            {site.legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="type-caption text-muted-foreground hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <ThemeSelector />
          </div>
        </div>
      </div>
    </footer>
  )
}
