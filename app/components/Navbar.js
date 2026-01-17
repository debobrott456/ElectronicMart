'use client'

import Link from 'next/link'
import { useAuth } from '../contexts/AuthContext'

export default function Navbar() {
  const { isLoggedIn, logout } = useAuth()

  const handleLogout = () => {
    logout()
    window.location.href = '/'
  }

  return (
    <nav className="bg-[#001d3d] text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              Electronic Mart
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link href="/items" className="hover:text-blue-200 transition-colors">
              Items
            </Link>
            
            {isLoggedIn ? (
              <>
                <Link href="/add-item" className="hover:text-blue-200 transition-colors">
                  Add Item
                </Link>
                <button 
                  onClick={handleLogout}
                  className="bg-[#002a5c] hover:bg-[#003875] px-3 py-2 rounded transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link 
                href="/login" 
                className="bg-[#002a5c] hover:bg-[#003875] px-3 py-2 rounded transition-colors"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}