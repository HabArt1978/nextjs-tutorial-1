import Link from 'next/link'

const HomePage = () => {
  return (
    <div className='text-center'>
      <h1 className='text-7xl py-4'>Home Page</h1>
      <Link
        href='/pages/about'
        className='text-2xl text-sky-600'
      >
        about page link
      </Link>
    </div>
  )
}

export default HomePage
