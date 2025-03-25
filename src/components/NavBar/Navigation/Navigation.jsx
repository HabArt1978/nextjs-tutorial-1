'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navigation = ({ links }) => {
  const pathName = usePathname()

  return (
    <nav className="navbar-center">
      <ul className="menu menu-horizontal space-x-3 px-1">
        {links.map((link, id) => {
          const isActiveLink = pathName === link.path
          return (
            <li
              className="capitalize"
              key={link.label + (id + 1)}
            >
              <Link
                href={link.path}
                className={`btn btn-ghost transition-colors duration-300 hover:text-orange-500 ${isActiveLink ? 'text-orange-500' : ''}`}
              >
                {link.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navigation
