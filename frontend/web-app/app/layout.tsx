import './globals.css'
import type { Metadata } from 'next'
import Navbar from './nav/Navbar'
import ToasterProvider from './providers/ToasterProvider'

export const metadata: Metadata = {
  title: 'LazarBazaar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ToasterProvider />
        <Navbar />
        <main className='container mx-auto px-5 pt-10'>
          {children}
        </main>
      </body>
    </html>
  )
}