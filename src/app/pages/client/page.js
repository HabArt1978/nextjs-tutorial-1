'use client'

import { useState } from 'react'

const ClientPage = () => {
  const [count, setCount] = useState(0)

  console.log('This is CLIENT component')

  return (
    <div className='text-center'>
      <h1 className='text-4xl pt-16 pb-10 uppercase'>counter</h1>
      <div className='text text-5xl font-bold text-amber-700'>{count}</div>

      <div className='flex space-x-4 justify-center'>
        {' '}
        <button
          href='/pages/about'
          className='btn btn-primary uppercase mt-10'
          onClick={() => setCount(count + 1)}
        >
          increment
        </button>
        <button
          href='/pages/about'
          className='btn btn-error uppercase mt-10'
          onClick={() => setCount(count - 1)}
        >
          decrement
        </button>
      </div>
    </div>
  )
}

export default ClientPage
