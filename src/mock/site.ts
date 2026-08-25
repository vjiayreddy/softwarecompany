import type { MockSite } from './types'

export const site: MockSite = {
  companyName: 'Zeftrosoft',
  tagline: 'Software consultancy that ships',
  blurb:
    'We partner with startups, growth companies, and enterprises to design, build, and scale reliable digital products.',
  contactEmail: 'hello@zeftrosoft.com',
  primaryNav: [
    { label: 'Services', href: '/services' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Work', href: '/work' },
    { label: 'Insights', href: '/insights' },
    { label: 'About', href: '/about' },
    { label: 'Careers', href: '/careers' },
  ],
  cta: { label: 'Talk to us', href: '/contact' },
  footerColumns: [
    {
      title: 'Offerings',
      links: [
        { label: 'Services', href: '/services' },
        { label: 'Solutions', href: '/solutions' },
        { label: 'Technologies', href: '/technologies' },
        { label: 'Products', href: '/products' },
      ],
    },
    {
      title: 'Work',
      links: [
        { label: 'Case studies', href: '/case-studies' },
        { label: 'Portfolio', href: '/work' },
        { label: 'Insights', href: '/insights' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Process', href: '/process' },
        { label: 'Team', href: '/team' },
        { label: 'Careers', href: '/careers' },
        { label: 'Contact', href: '/contact' },
      ],
    },
  ],
  socialLinks: [
    { platform: 'LinkedIn', href: 'https://www.linkedin.com/company/zeftrosoft' },
    { platform: 'X', href: 'https://x.com/zeftrosoft' },
    { platform: 'GitHub', href: 'https://github.com/zeftrosoft' },
  ],
  legalLinks: [
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
  ],
}
