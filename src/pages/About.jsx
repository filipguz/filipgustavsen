import PageContainer from '../components/PageContainer'
import { useLanguage } from '../context/LanguageContext'
import { t } from '../translations'

export default function About() {
  const { lang } = useLanguage()
  const txt = t[lang].about

  return (
    <PageContainer>
      <div className="max-w-2xl">
        <h1 className="text-3xl font-semibold text-gray-900 tracking-tight mb-10">
          {txt.title}
        </h1>

        <div className="space-y-5">
          {txt.paragraphs.map((p, i) => (
            <p key={i} className="text-base text-gray-600 leading-relaxed">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-12 border-l-2 border-gray-900 pl-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
            {txt.goalLabel}
          </p>
          <p className="text-lg font-medium text-gray-900 leading-relaxed">
            {txt.goal}
          </p>
        </div>
      </div>
    </PageContainer>
  )
}
