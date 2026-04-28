import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { t } from '../translations'

export default function Navbar() {
  const { lang, setLang } = useLanguage()
  const nav = t[lang].nav
  const [open, setOpen] = useState(false)
  const location = useLocation()

  // Close menu on navigation
  const handleNav = () => setOpen(false)

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors ${
      isActive ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'
    }`

  const mobileLinkClass = ({ isActive }) =>
    `block px-4 py-3 text-sm font-medium border-b border-gray-100 transition-colors ${
      isActive ? 'text-gray-900' : 'text-gray-500'
    }`

  return (
    <nav className="border-b border-gray-200 bg-white relative z-50">
      <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">

        {/* Logo */}
        <NavLink to="/" onClick={handleNav} className="flex items-center gap-3 group">
          <span className="w-8 h-8 rounded-full bg-gray-900 text-white text-xs font-semibold flex items-center justify-center tracking-tight group-hover:bg-gray-700 transition-colors">
            FG
          </span>
          <span className="text-sm font-semibold text-gray-900 tracking-tight">
            Filip Gustavsen
          </span>
        </NavLink>

        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-6">
          <NavLink to="/" end className={linkClass}>{nav.home}</NavLink>
          <NavLink to="/om" className={linkClass}>{nav.about}</NavLink>
          <NavLink to="/tech" className={linkClass}>{nav.tech}</NavLink>
          <NavLink to="/people" className={linkClass}>{nav.people}</NavLink>
          <button
            onClick={() => setLang(lang === 'no' ? 'en' : 'no')}
            className="text-xs font-medium px-2.5 py-1 rounded border border-gray-200 text-gray-500 hover:border-gray-400 hover:text-gray-900 transition-colors"
          >
            {lang === 'no' ? 'EN' : 'NO'}
          </button>
        </div>

        {/* Mobile: lang toggle + hamburger */}
        <div className="flex sm:hidden items-center gap-3">
          <button
            onClick={() => setLang(lang === 'no' ? 'en' : 'no')}
            className="text-xs font-medium px-2.5 py-1 rounded border border-gray-200 text-gray-500"
          >
            {lang === 'no' ? 'EN' : 'NO'}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="p-1 text-gray-500 hover:text-gray-900 transition-colors"
            aria-label="Meny"
          >
            {open ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <line x1="4" y1="4" x2="16" y2="16" />
                <line x1="16" y1="4" x2="4" y2="16" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <line x1="3" y1="6" x2="17" y2="6" />
                <line x1="3" y1="10" x2="17" y2="10" />
                <line x1="3" y1="14" x2="17" y2="14" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="sm:hidden bg-white border-t border-gray-100">
          <NavLink to="/" end className={mobileLinkClass} onClick={handleNav}>{nav.home}</NavLink>
          <NavLink to="/om" className={mobileLinkClass} onClick={handleNav}>{nav.about}</NavLink>
          <NavLink to="/tech" className={mobileLinkClass} onClick={handleNav}>{nav.tech}</NavLink>
          <NavLink to="/people" className={mobileLinkClass} onClick={handleNav}>{nav.people}</NavLink>
        </div>
      )}
    </nav>
  )
}
