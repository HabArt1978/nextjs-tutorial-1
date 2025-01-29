const DrinksLayout = ({ children }) => {
  return (
    <div className='max-w-4xl mx-auto mt-10 px-2'>
      <div className='mockup-code mb-8'>
        <pre data-prefix='$'>
          <code>npx create-next-app@latest nextjs-tutorial-1 --use-pnpm</code>
        </pre>
      </div>

      {children}
    </div>
  )
}

export default DrinksLayout
