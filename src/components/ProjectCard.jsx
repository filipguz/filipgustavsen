export default function ProjectCard({ title, description, tags, links }) {
  return (
    <div className="border border-gray-200 rounded-lg p-5 mb-4 bg-white">
      <h3 className="text-base font-semibold text-gray-900 mb-1">{title}</h3>
      <p className="text-sm text-gray-600 mb-3">{description}</p>
      {tags && (
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      {links && (
        <div className="flex gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs text-gray-500 hover:text-gray-900 underline underline-offset-2"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
