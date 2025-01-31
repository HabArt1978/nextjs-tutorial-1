import Image from 'next/image'
import Link from 'next/link'

const DrinksList = ({ drinks }) => {
  return (
    <ul className='grid grid-cols-1 mx-8 gap-6 mt-6 sm:grid-cols-2 sm:mx-0 md:grid-cols-3 lg:grid-cols-4'>
      {drinks.map(drink => {
        return (
          <li key={drink.idDrink}>
            <Link
              href={`/pages/drinks/${drink.idDrink}`}
              className='text-lg font-medium'
            >
              <figure className='relative h-48 mb-2'>
                <Image
                  src={drink.strDrinkThumb}
                  alt='Drink image'
                  fill
                  sizes='(max-width: 320px) 100vw, (max-width: 640px) 50vw, (976px) 33vw, 25wv'
                  className='rounded-lg object-cover shadow-md'
                  priority
                />
                <figcaption className='text-lg'>
                  <strong className='text-base'>Drink:</strong> {drink.strDrink}
                </figcaption>
              </figure>

              {drink.strDrink}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default DrinksList
