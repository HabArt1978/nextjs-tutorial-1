import Link from 'next/link'

const navBarLinks = [
  {
    label: 'home',
    path: '/',
  },
  {
    label: 'about',
    path: '/pages/about',
  },
  {
    label: 'client',
    path: '/pages/client',
  },
  {
    label: 'query',
    path: '/pages/query',
  },
  {
    label: 'drinks',
    path: '/pages/drinks',
  },
  {
    label: 'prisma-Example',
    path: '/pages/prisma-example',
  },
]

const NavBar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-start'>
        <Link
          href='#'
          className='btn btn-ghost text-xl'
        >
          daisyUI
        </Link>
      </div>
      <nav className='navbar-center'>
        <ul className='menu menu-horizontal px-1 space-x-3'>
          {navBarLinks.map((link, id) => (
            <li
              className='capitalize'
              key={link.label + (id + 1)}
            >
              <Link href={link.path}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className='navbar-end'>
        <Link
          href='#'
          className='btn btn-circle'
        >
          SET
        </Link>
      </div>
    </div>
  )
}

export default NavBar
