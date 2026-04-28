import { Link } from 'react-router-dom'
import PageContainer from '../components/PageContainer'
import IntersectionScene from '../components/IntersectionScene'
import { useLanguage } from '../context/LanguageContext'
import { t } from '../translations'

export default function Home() {
  const { lang } = useLanguage()
  const txt = t[lang].home

  return (
    <PageContainer>
      <div className="pt-8 pb-4">

        {/* Hero */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-8">
          <img
            src="/profil.jpg"
            alt="Filip Gustavsen"
            className="w-24 h-24 rounded-full object-cover shrink-0 bg-gray-100"
          />
          <div>
            <h1 className="text-4xl font-semibold text-gray-900 tracking-tight mb-2">
              Filip Gustavsen
            </h1>
            <p className="text-base text-gray-600 leading-relaxed max-w-lg">
              {txt.intro}
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          <Link
            to="/tech"
            className="group border border-gray-200 rounded-lg p-5 hover:border-gray-400 transition-colors"
          >
            <div className="flex items-start justify-between">
              <span className="text-sm font-semibold text-gray-900">{txt.techBtn}</span>
              <span className="text-gray-400 group-hover:text-gray-900 transition-colors">→</span>
            </div>
            <p className="text-sm text-gray-500 mt-1">{txt.techSub}</p>
          </Link>

          <Link
            to="/people"
            className="group border border-gray-200 rounded-lg p-5 hover:border-gray-400 transition-colors"
          >
            <div className="flex items-start justify-between">
              <span className="text-sm font-semibold text-gray-900">{txt.peopleBtn}</span>
              <span className="text-gray-400 group-hover:text-gray-900 transition-colors">→</span>
            </div>
            <p className="text-sm text-gray-500 mt-1">{txt.peopleSub}</p>
          </Link>
        </div>

        {/* Decorative illustration */}
        <div className="flex justify-center">
          <IntersectionScene className="w-36 text-gray-200" />
        </div>

      </div>
    </PageContainer>
  )
}
