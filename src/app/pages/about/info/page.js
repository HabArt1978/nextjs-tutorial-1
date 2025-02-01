import Link from 'next/link'

const ClientInfoPage = () => {
  return (
    <div className="text-center">
      <h1 className="py-4 text-7xl">Client Info Page</h1>
      <Link
        href="/"
        className="text-2xl text-sky-600"
      >
        home page link
      </Link>
    </div>
  )
}

export default ClientInfoPage
