import Link from 'next/link'

const AboutPage = () => {
  return (
    <div className='text-center'>
      <h1 className='text-7xl py-4'>About Page</h1>
      <Link
        href='/'
        className='text-2xl text-sky-600'
      >
        home page link
      </Link>
    </div>
  )
}

export default AboutPage
