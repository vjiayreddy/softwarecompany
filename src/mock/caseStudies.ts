import type { MockCaseStudy } from './types'

export const caseStudies: MockCaseStudy[] = [
  {
    slug: 'fintech-onboarding-rebuild',
    title: 'Rebuilding onboarding for a regulated fintech',
    client: 'Northline Finance',
    industry: 'Fintech',
    summary:
      'Cut time-to-first-value by 48% while meeting KYC requirements across three markets.',
    challenge:
      'Legacy onboarding was a multi-day process with drop-off above 60%. Compliance rules differed by region and blocked a single UX.',
    solution:
      'We rebuilt the flow as a modular journey with progressive disclosure, document OCR assist, and region-aware rule engines — shipped behind feature flags.',
    results: [
      { metric: '48%', label: 'Faster time-to-first-value' },
      { metric: '2.1×', label: 'Completion rate lift' },
      { metric: '3', label: 'Markets live on one codebase' },
    ],
    stack: ['Next.js', 'Node', 'PostgreSQL', 'AWS', 'Temporal'],
    testimonial: {
      quote:
        'Zeftrosoft treated compliance as a product constraint, not a blocker. We shipped on schedule with zero audit surprises.',
      name: 'Priya Nair',
      role: 'VP Product, Northline Finance',
    },
    featured: true,
    serviceSlugs: ['product-engineering', 'ai-product-labs'],
  },
  {
    slug: 'b2b-analytics-platform',
    title: 'Analytics workspace for a B2B SaaS platform',
    client: 'Signalboard',
    industry: 'SaaS',
    summary:
      'Delivered a customer-facing analytics product that reduced support tickets and unlocked a new pricing tier.',
    challenge:
      'Customers needed self-serve insights, but the team was buried in one-off CSV exports and fragile scripts.',
    solution:
      'We designed a queryable metrics layer, a design-system-backed UI, and saved views so CS and end users shared the same source of truth.',
    results: [
      { metric: '35%', label: 'Fewer data support tickets' },
      { metric: '12w', label: 'Idea to GA' },
      { metric: '18%', label: 'Attach rate on new tier' },
    ],
    stack: ['React', 'TypeScript', 'ClickHouse', 'dbt', 'Vercel'],
    testimonial: {
      quote: 'They built the system we wished we had started with — and taught our team to extend it.',
      name: 'Marcus Chen',
      role: 'CTO, Signalboard',
    },
    featured: true,
    serviceSlugs: ['product-engineering', 'design-systems', 'cloud-devops'],
  },
  {
    slug: 'commerce-platform-migration',
    title: 'Strangler migration for a high-traffic storefront',
    client: 'Oak & Thread',
    industry: 'Retail',
    summary:
      'Moved checkout and catalog off a monolith with zero planned downtime during peak season.',
    challenge:
      'The monolith blocked new markets. A big-bang rewrite was too risky before holiday traffic.',
    solution:
      'We introduced a BFF and progressively routed catalog and checkout to new services while keeping ops dashboards and rollback paths intact.',
    results: [
      { metric: '0', label: 'Planned downtime windows' },
      { metric: '40%', label: 'Faster p95 checkout' },
      { metric: '2', label: 'New regions launched' },
    ],
    stack: ['Next.js', 'Go', 'Kafka', 'Kubernetes', 'Shopify Hydrogen'],
    featured: false,
    serviceSlugs: ['platform-modernization', 'growth-engineering'],
  },
]

export function getCaseStudyBySlug(slug: string): MockCaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug)
}

export function getFeaturedCaseStudies(): MockCaseStudy[] {
  return caseStudies.filter((c) => c.featured)
}
