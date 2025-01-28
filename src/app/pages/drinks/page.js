const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a'

const fetchDrinks = async () => {
  await new Promise(resolve => setTimeout(resolve, 1500))
  const response = await fetch(baseUrl)
  const data = await response.json()
  return data
}

const DrinksPage = async () => {
  const dataDrinks = await fetchDrinks()
  console.log(dataDrinks)

  return (
    <div className='text-center'>
      <h1 className='text-4xl pt-16 pb-10'>Drinks page</h1>
    </div>
  )
}

export default DrinksPage
