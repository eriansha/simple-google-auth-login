import React, { createContext, useContext, useState } from 'react'
import AuthService from '../services/auth-service'

const defaultContext = {
  isLoggedIn    : false,
  user          : {},
  onLogin       : () => {},
  onLogout      : () => {}
}

export const AuthContext = createContext(defaultContext)

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false)

  const onLogin = () => { 
    setLoggedIn(true)
    AuthService.login()
  }

  const onLogout = () => { 
    setLoggedIn(false)
    AuthService.logout()
  }

  return (
    <AuthContext.Provider
      value={{
        // user,
        onLogin,
        onLogout,
        isLoggedIn
      }}
    >
      { children }
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}