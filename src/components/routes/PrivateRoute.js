import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import AuthService from '../../services/auth-service'

/**
 * Private route that redirect users to the home page if they are not currently authenticated
*/
function PrivateRoute({ component: Component, ...rest }) {

  return(
    <Route 
      {...rest} 
      render={(props) => (
        AuthService.isLoggedIn() ? (
          <Component {...props} />
        ) : (
          <Redirect to="/sign-in" />
        )
    )}
    />
  )
}

export default PrivateRoute