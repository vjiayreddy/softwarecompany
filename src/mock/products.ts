import type { MockProduct } from './types'

export const products: MockProduct[] = [
  {
    slug: 'delivery-os',
    title: 'Delivery OS',
    summary:
      'Internal playbooks, checklists, and dashboards we use to keep multi-squad engagements on cadence.',
    highlights: ['Sprint health views', 'Risk registers', 'Client-ready status packs'],
  },
  {
    slug: 'design-kit',
    title: 'Zeftrosoft Design Kit',
    summary:
      'Token and component starter aligned to our consultancy chrome — adapted per engagement.',
    highlights: ['CSS tokens', 'React primitives', 'Accessibility defaults'],
  },
  {
    slug: 'eval-harness',
    title: 'AI Eval Harness',
    summary:
      'Lightweight evaluation runners for RAG and copilots so quality is measured before scale.',
    highlights: ['Golden sets', 'Regression diffs', 'Cost / latency tracking'],
  },
]

export function getProductBySlug(slug: string): MockProduct | undefined {
  return products.find((p) => p.slug === slug)
}
