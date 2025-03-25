import Image from 'next/image'
import Link from 'next/link'
import myImage from './myImageLarge.jpg'
console.log(myImage)

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const getSingleDrink = async (id) => {
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
    <div className="text-center">
      <figure className="my-10">
        <div className="relative mx-auto aspect-video w-full max-w-2xl">
          {/* "требуется "relative" при необходимости измените высоту и ширину */}
          <Image
            src={myImage}
            alt="Пример резинового изображения"
            className="rounded-lg object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill // Растягивает изображение на весь div
            placeholder="blur" // Показывает размытую версию, пока грузится картинка
          />
        </div>
        <figcaption className="mt-2 text-sm">
          Пример статичного резинового изображения
        </figcaption>
      </figure>

      <Link
        href="/pages/drinks"
        className="btn btn-primary uppercase"
      >
        back to drinks
      </Link>

      <figure className="my-10">
        <Image
          src={imgSrc}
          alt="Пример подтягивания изображения со стороннего ресурса"
          width={300}
          height={300}
          className="mx-auto block rounded-lg object-cover shadow-lg"
          priority
        />
        <figcaption className="text-lg">
          <strong className="text-base">Drink:</strong> {title}
        </figcaption>
      </figure>
    </div>
  )
}
export default SingleDrinkPage
