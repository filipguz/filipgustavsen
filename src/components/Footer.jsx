import { useLanguage } from '../context/LanguageContext'
import { t } from '../translations'

export default function Footer() {
  const { lang } = useLanguage()
  const txt = t[lang].footer

  return (
    <footer className="border-t border-gray-200 mt-auto">
      <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className="text-sm text-gray-400">Filip Gustavsen</span>
        <div className="flex gap-6">
          <a
            href="mailto:filip@gustavsenfriluft.no"
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            {txt.email}
          </a>
          <a
            href="https://github.com/filipguz"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
