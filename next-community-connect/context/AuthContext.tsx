'use client'

import { createContext, useContext, useEffect, useState } from 'react'

interface User {
  name: string
  email: string
}

interface AuthContextType {
  user: User | null
  isSignedIn: boolean
  signIn: (email: string, password: string, name?: string) => void
  signOut: () => void
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isSignedIn: false,
  signIn: () => {},
  signOut: () => {},
})

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    try {
      const stored = localStorage.getItem('cc_user')
      if (stored) setUser(JSON.parse(stored))
    } catch {}
  }, [])

  const signIn = (email: string, _password: string, name?: string) => {
    const u: User = { email, name: name ?? email.split('@')[0] }
    setUser(u)
    try { localStorage.setItem('cc_user', JSON.stringify(u)) } catch {}
  }

  const signOut = () => {
    setUser(null)
    try { localStorage.removeItem('cc_user') } catch {}
  }

  return (
    <AuthContext.Provider value={{ user, isSignedIn: !!user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
