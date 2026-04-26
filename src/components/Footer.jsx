export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-auto">
      <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className="text-sm text-gray-400">Filip Gustavsen</span>
        <div className="flex gap-6">
          <a
            href="mailto:filip@gustavsenfriluft.no"
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            E-post
          </a>
          <a
            href="https://github.com/filipgustavsen"
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
