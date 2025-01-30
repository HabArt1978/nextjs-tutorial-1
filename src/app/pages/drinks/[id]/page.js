import Link from 'next/link'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const getSingleDrink = async id => {
  const response = await fetch(`${url}${id}`)
  if (!response.ok) {
    throw new Error('Failed to fetch a drink ...')
  }
  return response.json()
}

const SingleDrinkPage = async ({ params }) => {
  const { id } = await params
  // http://localhost:3000/pages/drinks/1211
  // 1211 is treated as an ID and goes into params.id

  const data = await getSingleDrink(id)
  const title = data?.drinks[0]?.strDrink
  const imgSrc = data?.drinks[0]?.strDrinkThumb

  return (
    <div className='text-center'>
      <Link
        href='/pages/drinks'
        className='btn btn-primary uppercase'
      >
        back to drinks
      </Link>
      <h1 className='text-4xl pt-10 pb-10'>{title}</h1>
    </div>
  )
}
export default SingleDrinkPage
