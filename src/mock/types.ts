/** Shared shapes for Track A mocks — align with Track B Payload collections. */

export type MockLink = {
  label: string
  href: string
  newTab?: boolean
}

export type MockNavItem = MockLink

export type MockFooterColumn = {
  title: string
  links: MockLink[]
}

export type MockSocialLink = {
  platform: string
  href: string
}

export type MockSite = {
  companyName: string
  tagline: string
  blurb: string
  contactEmail: string
  primaryNav: MockNavItem[]
  cta: MockLink
  footerColumns: MockFooterColumn[]
  socialLinks: MockSocialLink[]
  legalLinks: MockLink[]
}

export type MockService = {
  slug: string
  title: string
  type: 'service' | 'solution'
  summary: string
  outcomes: { label: string; detail: string }[]
  body: string
  relatedCaseStudySlugs: string[]
}

export type MockCaseStudy = {
  slug: string
  title: string
  client: string
  industry: string
  summary: string
  challenge: string
  solution: string
  results: { metric: string; label: string }[]
  stack: string[]
  testimonial?: { quote: string; name: string; role: string }
  featured: boolean
  serviceSlugs: string[]
}

export type MockTeamMember = {
  slug: string
  name: string
  role: string
  bio: string
  linkedIn?: string
  order: number
}

export type MockCareer = {
  slug: string
  title: string
  location: string
  type: 'full-time' | 'contract' | 'part-time'
  description: string
  applyUrl: string
}

export type MockInsight = {
  slug: string
  title: string
  excerpt: string
  category: string
  publishedAt: string
  readTime: string
}

export type MockTechItem = {
  label: string
  blurb: string
  category: string
}

export type MockProduct = {
  slug: string
  title: string
  summary: string
  highlights: string[]
}

export type MockStat = {
  value: string
  label: string
}

export type MockTestimonial = {
  quote: string
  name: string
  role: string
}

export type MockProcessStep = {
  title: string
  body: string
}

export type MockFaqItem = {
  question: string
  answer: string
}

export type MockLogoItem = {
  label: string
}

export type MockHome = {
  hero: {
    brand: string
    headline: string
    support: string
    primaryCta: MockLink
    secondaryCta: MockLink
  }
  logoCloud: { heading?: string; logos: MockLogoItem[] }
  stats: MockStat[]
  featuredServiceSlugs: string[]
  featuredCaseStudySlug: string
  techLabels: string[]
  insightSlugs: string[]
  testimonials: MockTestimonial[]
  processSteps: MockProcessStep[]
  faq: MockFaqItem[]
  leadCapture: {
    heading: string
    body: string
    cta: MockLink
  }
}
