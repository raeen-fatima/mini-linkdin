// app/layout.tsx
import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'Mini LinkedIn',
  description: 'A simple community platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="p-6 max-w-3xl mx-auto">{children}</main>
      </body>
    </html>
  )
}
