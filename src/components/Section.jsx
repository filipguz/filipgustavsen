export default function Section({ title, children }) {
  return (
    <section className="mb-12">
      {title && (
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
          {title}
        </h2>
      )}
      {children}
    </section>
  )
}
