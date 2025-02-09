'use client'

import { Toaster } from 'react-hot-toast'

const ToastProviders = ({ children }) => {
  return (
    <>
      <Toaster />
      {children}
    </>
  )
}

export default ToastProviders
