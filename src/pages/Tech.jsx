import PageContainer from '../components/PageContainer'
import Section from '../components/Section'
import ProjectCard from '../components/ProjectCard'

const stack = ['Java', 'Spring Boot', 'REST APIs', 'PostgreSQL', 'React', 'Git', 'Stripe']

const projects = [
  {
    title: 'Leirskoleportalen',
    description: 'SaaS platform for managing school camps. Handles bookings, invoicing, and communication between schools and camp providers.',
    tags: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Stripe'],
    links: [
      { label: 'GitHub', href: '#' },
      { label: 'Demo', href: '#' },
    ],
  },
  {
    title: 'Ventilation Dashboard',
    description: 'Real-time dashboard for monitoring ventilation systems over Modbus TCP.',
    tags: ['React', 'Spring Boot', 'Modbus TCP'],
    links: [{ label: 'GitHub', href: '#' }],
  },
  {
    title: 'Lønnskrav AI',
    description: 'Decision support system for salary claim processing. Built as an MVP.',
    tags: ['React', 'AI/ML'],
    links: [{ label: 'GitHub', href: '#' }],
  },
]

export default function Tech() {
  return (
    <PageContainer>
      <div className="mb-10">
        <h1 className="text-3xl font-semibold text-gray-900 tracking-tight mb-3">
          Tech / Development
        </h1>
        <p className="text-base text-gray-600 max-w-xl leading-relaxed">
          Self-taught fullstack developer. I have built and deployed a SaaS
          application using Java and Spring Boot — from database design to
          production deployment.
        </p>
      </div>

      <Section title="Tech Stack">
        <div className="flex flex-wrap gap-2">
          {stack.map((item) => (
            <span
              key={item}
              className="text-sm px-3 py-1 border border-gray-200 rounded text-gray-700"
            >
              {item}
            </span>
          ))}
        </div>
      </Section>

      <Section title="Projects">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </Section>

      <Section title="Links">
        <div className="flex gap-6">
          <a
            href="#"
            className="text-sm text-gray-500 hover:text-gray-900 underline underline-offset-2"
          >
            GitHub
          </a>
          <a
            href="#"
            className="text-sm text-gray-500 hover:text-gray-900 underline underline-offset-2"
          >
            LinkedIn
          </a>
        </div>
      </Section>
    </PageContainer>
  )
}
