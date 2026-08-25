import type { MockService } from './types'

export const services: MockService[] = [
  {
    slug: 'product-engineering',
    title: 'Product engineering',
    type: 'service',
    summary:
      'End-to-end product teams that design, build, and iterate production software with measurable outcomes.',
    outcomes: [
      { label: 'Ship faster', detail: 'Weekly releases with clear ownership and quality bars.' },
      { label: 'Reduce risk', detail: 'Architecture reviews, testing, and observability from day one.' },
      { label: 'Scale cleanly', detail: 'Codebases and teams that grow without rewrites.' },
    ],
    body: 'From discovery to launch, we embed with your stakeholders to deliver reliable web and mobile products. We own delivery cadence, technical decisions, and handoff quality.',
    relatedCaseStudySlugs: ['fintech-onboarding-rebuild', 'b2b-analytics-platform'],
  },
  {
    slug: 'platform-modernization',
    title: 'Platform modernization',
    type: 'service',
    summary:
      'Migrate legacy systems to modern stacks without freezing the business — strangler patterns, APIs, and cloud-native ops.',
    outcomes: [
      { label: 'Cut ops cost', detail: 'Consolidate infrastructure and reduce toil.' },
      { label: 'Improve DX', detail: 'Faster deploys and clearer service boundaries.' },
      { label: 'Protect revenue', detail: 'Zero-downtime cutovers and rollback plans.' },
    ],
    body: 'We assess current systems, sequence migrations, and deliver incremental value while keeping core journeys online.',
    relatedCaseStudySlugs: ['commerce-platform-migration'],
  },
  {
    slug: 'design-systems',
    title: 'Design systems',
    type: 'service',
    summary:
      'Token-driven UI systems that keep product, marketing, and admin surfaces consistent and fast to ship.',
    outcomes: [
      { label: 'Consistency', detail: 'Shared tokens and components across teams.' },
      { label: 'Velocity', detail: 'New screens assemble from proven primitives.' },
      { label: 'Accessibility', detail: 'WCAG-minded defaults baked into the kit.' },
    ],
    body: 'We audit existing UI, define tokens and components, and integrate them into your React or design-tool workflows.',
    relatedCaseStudySlugs: ['b2b-analytics-platform'],
  },
  {
    slug: 'ai-product-labs',
    title: 'AI product labs',
    type: 'solution',
    summary:
      'Scoped AI features grounded in real workflows — retrieval, copilots, and evaluation — not demos that stall.',
    outcomes: [
      { label: 'Validated use cases', detail: 'Pilot in weeks with success metrics defined up front.' },
      { label: 'Production path', detail: 'Safety, latency, and cost controls before scale.' },
      { label: 'Team enablement', detail: 'Your engineers own the system after launch.' },
    ],
    body: 'We help you pick the right problem, build a thin vertical slice, measure quality, and harden for production.',
    relatedCaseStudySlugs: ['fintech-onboarding-rebuild'],
  },
  {
    slug: 'growth-engineering',
    title: 'Growth engineering',
    type: 'solution',
    summary:
      'Experimentation, funnel instrumentation, and conversion-focused product work for teams past product-market fit.',
    outcomes: [
      { label: 'Clear funnels', detail: 'Events and dashboards that answer business questions.' },
      { label: 'Faster experiments', detail: 'Safe feature flags and A/B infrastructure.' },
      { label: 'Compounding wins', detail: 'A backlog prioritized by impact, not opinions.' },
    ],
    body: 'We connect product, data, and engineering so experiments ship quickly and learnings stick.',
    relatedCaseStudySlugs: ['commerce-platform-migration'],
  },
  {
    slug: 'cloud-devops',
    title: 'Cloud & DevOps',
    type: 'solution',
    summary:
      'CI/CD, observability, and infrastructure that keep delivery predictable as your product grows.',
    outcomes: [
      { label: 'Reliable deploys', detail: 'Automated pipelines with review and rollback.' },
      { label: 'Visibility', detail: 'Metrics, traces, and alerts that matter.' },
      { label: 'Cost control', detail: 'Right-sized environments and budgets.' },
    ],
    body: 'We harden the path from commit to production and give your team runbooks they will actually use.',
    relatedCaseStudySlugs: ['b2b-analytics-platform'],
  },
]

export function getServiceBySlug(slug: string): MockService | undefined {
  return services.find((s) => s.slug === slug)
}

export function getServicesByType(type: MockService['type']): MockService[] {
  return services.filter((s) => s.type === type)
}
