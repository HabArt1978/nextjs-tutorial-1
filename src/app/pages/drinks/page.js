import DrinksList from '@/app/components/DrinksList/DrinksList'

const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=b'

const fetchDrinks = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1500))
  const response = await fetch(baseUrl)
  const data = await response.json()
  return data
}

const DrinksPage = async () => {
  const data = await fetchDrinks()

  return (
    <div className="text-center">
      <DrinksList drinks={data.drinks} />
    </div>
  )
}

export default DrinksPage
