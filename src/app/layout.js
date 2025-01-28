import { Geist, Geist_Mono } from 'next/font/google'
import NavBar from './components/NavBar/NavBar'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Next cocktails',
  description: 'Build awesome stuff with Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          <NavBar />
        </header>

        <main className='max-w-6xl mx-auto'>{children}</main>
      </body>
    </html>
  )
}
