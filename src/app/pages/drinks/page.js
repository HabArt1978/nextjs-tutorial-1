const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a'

const DrinksPage = async () => {
  const response = await fetch(baseUrl)
  const data = await response.json()
  console.log(data)

  return (
    <div className='text-center'>
      <h1 className='text-4xl pt-16 pb-10'>Drinks page</h1>
    </div>
  )
}

export default DrinksPage
