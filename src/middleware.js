import { NextResponse } from 'next/server'

export function middleware() {
  return NextResponse.json({ msg: 'Hello There' }) // Вывод на страницу браузера, если вернуть строку в console.log() получим сообщение в консоли редактора.
}

export const config = {
  matcher: '/pages/about' // выводит данное сообщение для определённой страницы, обрати внимание для пути /about нет pages/js
}
