import Link from 'next/link'

const HomePage = () => {
  console.log(`This is SERVER component`)

  return (
    <div className="text-center">
      <h1 className="pb-10 pt-16 text-4xl">Next.js tutorial</h1>
      <Link
        href="/pages/client"
        className="btn btn-accent uppercase"
      >
        get started
      </Link>
    </div>
  )
}

export default HomePage
