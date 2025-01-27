import Link from 'next/link'

const PrismaExamplePage = () => {
  return (
    <div className='text-center'>
      <h1 className='text-7xl py-4'>Prisma Example Page</h1>
      <Link
        href='/pages/about'
        className='text-2xl text-sky-600'
      >
        about page link
      </Link>
    </div>
  )
}

export default PrismaExamplePage
