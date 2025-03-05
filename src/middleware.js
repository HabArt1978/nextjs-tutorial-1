import { NextResponse } from 'next/server'

export function middleware(request) {
  console.log('!!! REQUEST URL !!! :', request.url)
  return NextResponse.redirect(new URL('/pages/auth/sing-in', request.url)) // указываем страницу для перехода если условие заданное в config.matcher совпадает с request.url.
}

export const config = {
  matcher: ['/pages/tasks/:path*', '/pages/client-side-tasks/:path*'] // Если мы попытаемся перейти на страницу с задачами нас перебросит на страницу авторизации. Таким образом защищаем route.
}
