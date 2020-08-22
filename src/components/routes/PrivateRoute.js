import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuth } from '../../context/auth'

/**
 * Private route that redirect users to the home page if they are not currently authenticated
*/
function PrivateRoute({ component: Component, ...rest }) {
  const { isLoggedIn } = useAuth()

  return(
    <Route 
      {...rest} 
      render={(props) => (
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to="/sign-in" />
        )
    )}
    />
  )
}

export default PrivateRoute