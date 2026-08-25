import type { MockHome } from './types'

export const home: MockHome = {
  hero: {
    brand: 'Zeftrosoft',
    headline: 'Build software that earns trust',
    support:
      'A consultancy for teams that need senior engineering, clear design systems, and delivery you can measure.',
    primaryCta: { label: 'Talk to us', href: '/contact' },
    secondaryCta: { label: 'See our work', href: '/work' },
  },
  logoCloud: {
    heading: 'Trusted by product teams',
    logos: [
      { label: 'Northline' },
      { label: 'Signalboard' },
      { label: 'Oak & Thread' },
      { label: 'Helix Health' },
      { label: 'Parcelight' },
      { label: 'Monad Labs' },
    ],
  },
  stats: [
    { value: '40+', label: 'Products shipped' },
    { value: '12', label: 'Years combined leadership' },
    { value: '98%', label: 'Client retention' },
    { value: '3w', label: 'Typical discovery to build' },
  ],
  featuredServiceSlugs: [
    'product-engineering',
    'platform-modernization',
    'design-systems',
    'ai-product-labs',
  ],
  featuredCaseStudySlug: 'fintech-onboarding-rebuild',
  techLabels: ['Next.js', 'TypeScript', 'PostgreSQL', 'AWS', 'Payload CMS', 'Kubernetes'],
  insightSlugs: [
    'strangler-migrations-that-ship',
    'design-tokens-for-consultancies',
    'ai-features-with-eval-loops',
  ],
  testimonials: [
    {
      quote:
        'Zeftrosoft treated compliance as a product constraint, not a blocker. We shipped on schedule with zero audit surprises.',
      name: 'Priya Nair',
      role: 'VP Product, Northline Finance',
    },
    {
      quote: 'They built the system we wished we had started with — and taught our team to extend it.',
      name: 'Marcus Chen',
      role: 'CTO, Signalboard',
    },
  ],
  processSteps: [
    {
      title: 'Discover',
      body: 'Align on outcomes, constraints, and the thinnest slice that proves value.',
    },
    {
      title: 'Design & build',
      body: 'Weekly shipping with design and engineering in one cadence.',
    },
    {
      title: 'Harden',
      body: 'Quality, observability, and docs so your team can own what we leave behind.',
    },
    {
      title: 'Scale',
      body: 'Grow the system and the squad without rewriting the foundation.',
    },
  ],
  faq: [
    {
      question: 'Do you embed with our team or work independently?',
      answer:
        'Both. Most engagements start embedded with your PMs and engineers, then shift to a clearer ownership model as delivery stabilizes.',
    },
    {
      question: 'What is a typical engagement length?',
      answer:
        'Discovery is usually 2–4 weeks. Build phases run in 8–16 week increments with clear exit criteria.',
    },
    {
      question: 'Which stacks do you prefer?',
      answer:
        'TypeScript across the stack is common — Next.js, Node, and strong data layers. We meet you where you are when migration is the goal.',
    },
  ],
  leadCapture: {
    heading: 'Ready to talk through a problem?',
    body: 'Share a bit about your product and timeline. We respond within one business day.',
    cta: { label: 'Talk to us', href: '/contact' },
  },
}
