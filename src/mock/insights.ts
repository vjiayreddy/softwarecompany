import type { MockInsight } from './types'

export const insights: MockInsight[] = [
  {
    slug: 'strangler-migrations-that-ship',
    title: 'Strangler migrations that actually ship',
    excerpt:
      'How we sequence cutovers, keep rollback paths warm, and avoid the big-bang rewrite trap.',
    category: 'Engineering',
    publishedAt: '2026-06-12',
    readTime: '8 min',
  },
  {
    slug: 'design-tokens-for-consultancies',
    title: 'Design tokens that survive client handoff',
    excerpt:
      'A practical token structure for teams that build multiple products without reinventing chrome each time.',
    category: 'Design',
    publishedAt: '2026-05-28',
    readTime: '6 min',
  },
  {
    slug: 'ai-features-with-eval-loops',
    title: 'AI features need eval loops, not demos',
    excerpt:
      'What we measure before calling an AI pilot “done,” and how product and eng share ownership.',
    category: 'AI',
    publishedAt: '2026-04-14',
    readTime: '7 min',
  },
]

export function getInsightBySlug(slug: string): MockInsight | undefined {
  return insights.find((i) => i.slug === slug)
}
