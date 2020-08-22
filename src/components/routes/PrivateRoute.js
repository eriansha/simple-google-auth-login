import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuth } from '../../context/auth'

/**
 * Private route that redirect users to the home page if they are not currently authenticated
*/
function PrivateRoute({ component: Component, ...rest }) {
  const isAuthenticated = useAuth()

  return(
    <Route 
      {...rest} 
      render={(props) => (
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
    )}
    />
  )
}

export default PrivateRoute