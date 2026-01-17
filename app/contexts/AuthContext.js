'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import Cookies from 'js-cookie'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loading, setLoading] = useState(true)

  const checkAuthStatus = () => {
    const token = Cookies.get('auth-token')
    setIsLoggedIn(!!token)
    setLoading(false)
  }

  useEffect(() => {
    checkAuthStatus()
  }, [])

  const login = (token) => {
    Cookies.set('auth-token', token, { expires: 7 })
    setIsLoggedIn(true)
  }

  const logout = () => {
    Cookies.remove('auth-token')
    setIsLoggedIn(false)
  }

  return (
    <AuthContext.Provider value={{ 
      isLoggedIn, 
      loading, 
      login, 
      logout, 
      checkAuthStatus 
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}