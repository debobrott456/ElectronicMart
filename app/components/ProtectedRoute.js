'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '../contexts/AuthContext'

export default function ProtectedRoute({ children }) {
  const { isLoggedIn, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !isLoggedIn) {
      router.push('/login')
    }
  }, [isLoggedIn, loading, router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#001d3d] mx-auto"></div>
          <p className="mt-4 text-gray-600">Checking authentication...</p>
        </div>
      </div>
    )
  }

  if (!isLoggedIn) {
    return null
  }

  return children
}