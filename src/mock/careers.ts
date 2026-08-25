import type { MockCareer } from './types'

export const careers: MockCareer[] = [
  {
    slug: 'senior-product-engineer',
    title: 'Senior Product Engineer',
    location: 'Remote (India / EU overlap)',
    type: 'full-time',
    description:
      'Ship customer-facing features with a small pod. Strong TypeScript/React or Node experience required. You will own outcomes, not tickets.',
    applyUrl: '/contact?role=senior-product-engineer',
  },
  {
    slug: 'staff-platform-engineer',
    title: 'Staff Platform Engineer',
    location: 'Remote (India / EU overlap)',
    type: 'full-time',
    description:
      'Lead modernization and platform work across client engagements. Kubernetes, CI/CD, and mentoring experience preferred.',
    applyUrl: '/contact?role=staff-platform-engineer',
  },
  {
    slug: 'product-designer',
    title: 'Product Designer',
    location: 'Hybrid — Bengaluru',
    type: 'contract',
    description:
      'Design systems and product flows for consultancy and client work. Portfolio should show shipping, not only concepts.',
    applyUrl: '/contact?role=product-designer',
  },
]

export function getCareerBySlug(slug: string): MockCareer | undefined {
  return careers.find((c) => c.slug === slug)
}
