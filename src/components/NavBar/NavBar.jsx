import navBarLinks from '@/app/_library/forRoutesAndLinks'
import Link from 'next/link'

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-start">
        <Link
          href="#"
          className="btn btn-ghost text-xl"
        >
          daisyUI
        </Link>
      </div>
      <nav className="navbar-center">
        <ul className="menu menu-horizontal space-x-3 px-1">
          {navBarLinks.map((link, id) => (
            <li
              className="capitalize"
              key={link.label + (id + 1)}
            >
              <Link href={link.path}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="navbar-end">
        <Link
          href="#"
          className="btn btn-circle btn-ghost"
        >
          SET
        </Link>
      </div>
    </div>
  )
}

export default NavBar
