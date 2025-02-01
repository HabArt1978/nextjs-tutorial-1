'use client'

import { useState } from 'react'

const ClientPage = () => {
  const [count, setCount] = useState(0)

  console.log('This is CLIENT component')

  return (
    <div className="text-center">
      <h1 className="pb-10 pt-16 text-4xl uppercase">counter</h1>
      <div className="text text-5xl font-bold text-amber-700">{count}</div>

      <div className="flex justify-center space-x-4">
        {' '}
        <button
          href="/pages/about"
          className="btn btn-primary mt-10 uppercase"
          onClick={() => setCount(count + 1)}
        >
          increment
        </button>
        <button
          href="/pages/about"
          className="btn btn-error mt-10 uppercase"
          onClick={() => setCount(count - 1)}
        >
          decrement
        </button>
      </div>
    </div>
  )
}

export default ClientPage
