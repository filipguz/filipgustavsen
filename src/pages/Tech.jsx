import PageContainer from '../components/PageContainer'
import Section from '../components/Section'
import ProjectCard from '../components/ProjectCard'
import RetroTerminal from '../components/RetroTerminal'
import { useLanguage } from '../context/LanguageContext'
import { t } from '../translations'

const stack = ['Java', 'Spring Boot', 'REST APIs', 'PostgreSQL', 'React', 'Git', 'Stripe']

export default function Tech() {
  const { lang } = useLanguage()
  const txt = t[lang].tech

  return (
    <PageContainer>
      <div className="mb-10 flex items-start justify-between gap-6">
        <div>
          <h1 className="text-3xl font-semibold text-gray-900 tracking-tight mb-3">
            {txt.title}
          </h1>
          <p className="text-base text-gray-600 max-w-xl leading-relaxed">
            {txt.intro}
          </p>
        </div>
        <RetroTerminal className="w-32 shrink-0 text-gray-300 hidden sm:block" />
      </div>

      <Section title={txt.stackTitle}>
        <div className="flex flex-wrap gap-2">
          {stack.map((item) => (
            <span key={item} className="text-sm px-3 py-1 border border-gray-200 rounded text-gray-700">
              {item}
            </span>
          ))}
        </div>
      </Section>

      <Section title={txt.projectsTitle}>
        {txt.projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </Section>

      <Section title={txt.linksTitle}>
        <div className="flex gap-6">
          <a href="#" className="text-sm text-gray-500 hover:text-gray-900 underline underline-offset-2">GitHub</a>
          <a href="#" className="text-sm text-gray-500 hover:text-gray-900 underline underline-offset-2">LinkedIn</a>
        </div>
      </Section>
    </PageContainer>
  )
}
