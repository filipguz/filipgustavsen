import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors ${
      isActive ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'
    }`

  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
        <NavLink to="/" className="text-sm font-semibold text-gray-900 tracking-tight">
          Filip Gustavsen
        </NavLink>
        <div className="flex gap-6">
          <NavLink to="/" end className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/tech" className={linkClass}>
            Tech
          </NavLink>
          <NavLink to="/people" className={linkClass}>
            People
          </NavLink>
        </div>
      </div>
    </nav>
  )
}
