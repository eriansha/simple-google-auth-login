import React  from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import './App.css';

import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import PrivateRoute from './components/routes/PrivateRoute';

import Login from './pages/login'
import SignUp from './pages/sign-up'
import Home from './pages/home'
import Profile from './pages/profile'

import { AuthProvider, useAuth } from './context/auth'

function App(props) {
  const { isLoggedIn, onLogout } = useAuth()

  const unauthenticatedNav = () => {
    return(
      <>
        <NavItem>
          <NavLink href="/sign-in">Sign In</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/sign-up">Sign Up</NavLink>
        </NavItem>
      </>
    )
  }

  const authenticatedNav = () => {
    return(
      <>
        <NavItem>
          <NavLink href="#" onClick={handleLogOut}>Logout</NavLink>
        </NavItem>
      </>
    )
  }

  const handleLogOut = () => {
    onLogout()

    return <Redirect to="/sign-in" />
  }

  console.log(isLoggedIn)

  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <Navbar color="faded" light>
            <NavbarBrand href="/">React Login</NavbarBrand>
            <Nav right>
              {
                isLoggedIn ? 
                  authenticatedNav() : 
                  unauthenticatedNav()
              }
            </Nav>
          </Navbar>

          <div className="auth-wrapper">
            <div className="auth-inner">
              <Route exact path="/" component={Home} />
              <Route path="/sign-in" component={Login} />
              <Route path="/sign-up" component={SignUp} />
              <PrivateRoute path="/profile" component={Profile} />
            </div>
          </div>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
