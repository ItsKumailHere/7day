// 'use client'

// import React, { createContext, useContext, useState } from 'react'

// interface AuthContextType {
//   isSignedIn: boolean
//   signIn: () => void
//   signOut: () => void
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined)

// export function AuthProvider({ children }: { children: React.ReactNode }) {
//   const [isSignedIn, setIsSignedIn] = useState(false)

//   const signIn = () => setIsSignedIn(true)
//   const signOut = () => setIsSignedIn(false)

//   return (
//     <AuthContext.Provider value={{ isSignedIn, signIn, signOut }}>
//       {children}
//     </AuthContext.Provider>
//   )
// }

// export function useAuth() {
//   const context = useContext(AuthContext)
//   if (context === undefined) {
//     throw new Error('useAuth must be used within an AuthProvider')
//   }
//   return context
// }

// TODO: To integrate Clerk authentication:
// 1. Remove this file
// 2. Use Clerk's useUser() hook instead of this custom hook
// 3. Update components to use Clerk's authentication methods

