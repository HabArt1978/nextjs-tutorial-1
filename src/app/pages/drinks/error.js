'use client'

const error = (err) => {
  return <strong>{err.error.message}</strong>
}

export default error
