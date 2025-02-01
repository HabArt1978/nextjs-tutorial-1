const DrinksLayout = ({ children }) => {
  return (
    <div className="mx-auto mt-10 max-w-4xl px-2">
      <div className="mockup-code mb-8 min-w-10">
        <pre data-prefix="$">
          <code>npx create-next-app@latest nextjs-tutorial-1 --use-pnpm</code>
        </pre>
      </div>

      {children}
    </div>
  )
}

export default DrinksLayout
