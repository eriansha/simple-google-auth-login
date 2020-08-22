import React, { createContext, useContext, useState } from 'react'

const defaultContext = {
  isLoggedIn    : false,
  customer      : {},
  onLogin       : () => {},
  onLogout      : () => {}
}

export const AuthContext = createContext(defaultContext)

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState(undefined)

  const onLogin = () => { setIsLoggedIn(true) }

  const onLogout = () => { setIsLoggedIn(false) }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        user,
        onLogin,
        onLogout
      }}
    >
      { children }
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}