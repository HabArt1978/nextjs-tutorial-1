import navBarLinks from '@/library/forRoutesAndLinks'
import Link from 'next/link'

import Navigation from './Navigation/Navigation'

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

      <Navigation links={navBarLinks} />

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
