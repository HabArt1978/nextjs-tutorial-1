// ? Используйте [...sing-in], если всегда нужен хотя бы один сегмент (например, /auth/sing-in/users) Результатом params станет { 'sing-in': [ 'sing-in', 'users', 'tasks' ] }
// * Используйте [[...sing-in]], если нужен fallback, например, /sing-in должен открывать главную страницу регистрации, а /auth/sing-in/users – конкретную страницу. Этот маршрут не упадёт если нет страницы /auth, просто результатом params будет пустой {} и переход на /auth/sing-in

const SignInPage = async ({ params }) => {
  const myParams = await params
  console.log(myParams)

  return (
    <div className="text-center">
      <h1 className="py-4 text-7xl">Sign In Page</h1>
    </div>
  )
}

export default SignInPage
