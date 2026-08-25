import type { MockTechItem } from './types'

export const technologies: MockTechItem[] = [
  { label: 'Next.js', blurb: 'App Router, RSC, and edge-friendly delivery.', category: 'Frontend' },
  { label: 'React', blurb: 'Component systems and interactive product UI.', category: 'Frontend' },
  { label: 'TypeScript', blurb: 'Typed contracts across UI and services.', category: 'Language' },
  { label: 'Node.js', blurb: 'APIs, workers, and BFF layers.', category: 'Backend' },
  { label: 'PostgreSQL', blurb: 'Transactional core and relational modeling.', category: 'Data' },
  { label: 'MongoDB', blurb: 'Document stores when schema flexibility wins.', category: 'Data' },
  { label: 'Payload CMS', blurb: 'Content and admin for marketing + product.', category: 'CMS' },
  { label: 'AWS', blurb: 'Production infrastructure and managed services.', category: 'Cloud' },
  { label: 'Vercel', blurb: 'Preview deploys and frontend delivery.', category: 'Cloud' },
  { label: 'Kubernetes', blurb: 'Container orchestration for multi-service apps.', category: 'Cloud' },
  { label: 'Kafka', blurb: 'Event streams for integrations and pipelines.', category: 'Data' },
  { label: 'Temporal', blurb: 'Durable workflows for complex business processes.', category: 'Backend' },
]
