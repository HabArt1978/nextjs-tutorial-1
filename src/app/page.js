import Link from 'next/link'

const HomePage = () => {
  console.log(`This is SERVER component`)

  return (
    <div className='text-center'>
      <h1 className='text-4xl pt-16 pb-10'>Next.js tutorial</h1>
      <Link
        href='/pages/client'
        className='btn btn-accent uppercase'
      >
        get started
      </Link>
    </div>
  )
}

export default HomePage
