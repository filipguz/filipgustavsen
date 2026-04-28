import { NavLink } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { t } from '../translations'

export default function Navbar() {
  const { lang, setLang } = useLanguage()
  const nav = t[lang].nav

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors ${
      isActive ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'
    }`

  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-3 group">
          <span className="w-8 h-8 rounded-full bg-gray-900 text-white text-xs font-semibold flex items-center justify-center tracking-tight group-hover:bg-gray-700 transition-colors">
            FG
          </span>
          <span className="text-sm font-semibold text-gray-900 tracking-tight">
            Filip Gustavsen
          </span>
        </NavLink>

        <div className="flex items-center gap-6">
          <NavLink to="/" end className={linkClass}>{nav.home}</NavLink>
          <NavLink to="/tech" className={linkClass}>{nav.tech}</NavLink>
          <NavLink to="/people" className={linkClass}>{nav.people}</NavLink>

          <button
            onClick={() => setLang(lang === 'no' ? 'en' : 'no')}
            className="text-xs font-medium px-2.5 py-1 rounded border border-gray-200 text-gray-500 hover:border-gray-400 hover:text-gray-900 transition-colors"
          >
            {lang === 'no' ? 'EN' : 'NO'}
          </button>
        </div>
      </div>
    </nav>
  )
}
