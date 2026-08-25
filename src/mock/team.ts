import type { MockTeamMember } from './types'

export const team: MockTeamMember[] = [
  {
    slug: 'ananya-rao',
    name: 'Ananya Rao',
    role: 'Managing Partner',
    bio: 'Former product lead at two Series B startups. Focuses on delivery systems and client outcomes.',
    linkedIn: 'https://www.linkedin.com/',
    order: 1,
  },
  {
    slug: 'dev-kapoor',
    name: 'Dev Kapoor',
    role: 'Engineering Director',
    bio: 'Platform and distributed systems background. Owns technical standards and mentoring.',
    linkedIn: 'https://www.linkedin.com/',
    order: 2,
  },
  {
    slug: 'sofia-martinez',
    name: 'Sofia Martinez',
    role: 'Design Lead',
    bio: 'Design systems and product design for B2B and fintech. Obsessed with clarity over decoration.',
    linkedIn: 'https://www.linkedin.com/',
    order: 3,
  },
  {
    slug: 'james-okafor',
    name: 'James Okafor',
    role: 'Principal Engineer',
    bio: 'Cloud architecture, observability, and migration programs for high-traffic products.',
    linkedIn: 'https://www.linkedin.com/',
    order: 4,
  },
]

export function getTeamMemberBySlug(slug: string): MockTeamMember | undefined {
  return team.find((m) => m.slug === slug)
}

export function getTeamSorted(): MockTeamMember[] {
  return [...team].sort((a, b) => a.order - b.order)
}
