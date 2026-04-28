import { Link } from 'react-router-dom'
import PageContainer from '../components/PageContainer'
import { useLanguage } from '../context/LanguageContext'
import { t } from '../translations'

export default function Home() {
  const { lang } = useLanguage()
  const txt = t[lang].home

  return (
    <PageContainer>
      <div className="pt-8 pb-4 flex flex-col sm:flex-row sm:items-start gap-8">
        <img
          src="/profil.jpg"
          alt="Filip Gustavsen"
          className="w-28 h-28 rounded-full object-cover shrink-0 bg-gray-100"
        />

        <div>
          <h1 className="text-4xl font-semibold text-gray-900 tracking-tight mb-4">
            Filip Gustavsen
          </h1>
          <p className="text-lg text-gray-600 max-w-lg leading-relaxed mb-10">
            {txt.intro}
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/tech"
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors"
            >
              {txt.techBtn}
            </Link>
            <Link
              to="/people"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:border-gray-400 hover:text-gray-900 transition-colors"
            >
              {txt.peopleBtn}
            </Link>
          </div>
        </div>
      </div>
    </PageContainer>
  )
}
