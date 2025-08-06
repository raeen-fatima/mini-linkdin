'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaHome, FaPlusCircle, FaSignInAlt, FaUserPlus } from 'react-icons/fa'

export default function Navbar() {
  const pathname = usePathname()

  const linkStyle = (path: string) =>
    `flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100 transition ${
      pathname === path ? 'font-bold text-blue-600' : 'text-gray-700'
    }`

  return (
    <nav className="bg-white border-b shadow-sm px-8 py-3 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Logo + Nav Links */}
        <div className="flex items-center gap-10">
          <Link href="/" className="text-xl font-bold text-blue-600">
            DevLink
          </Link>
          <div className="flex gap-6">
            <Link href="/" className={linkStyle('/')}>
              <FaHome /> Feed
            </Link>
            <Link href="/create-post" className={linkStyle('/create-post')}>
              <FaPlusCircle /> Create Post
            </Link>
          </div>
        </div>

        {/* Right: Auth Links */}
        <div className="flex items-center gap-4">
          <Link href="/login" className={linkStyle('/login')}>
            <FaSignInAlt /> Login
          </Link>
          <Link href="/register" className={linkStyle('/register')}>
            <FaUserPlus /> Register
          </Link>
        </div>
      </div>
    </nav>
  )
}
