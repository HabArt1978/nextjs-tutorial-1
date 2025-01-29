const SingleDrinkPage = ({ params }) => {
  // http://localhost:3000/pages/drinks/1211
  // 1211 is treated as an ID and goes into params.id

  return (
    <div className='text-center'>
      <h1 className='text-4xl pt-10 pb-10'>Single page drink</h1>
    </div>
  )
}
export default SingleDrinkPage
