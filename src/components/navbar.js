import React  from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Redirect } from "react-router-dom";

import { useAuth } from '../context/auth'
import AuthService from '../services/auth-service'

function NavBar(props) {
  const { onLogout } = useAuth()

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
          <NavLink href="/sign-in" onClick={handleLogOut}>Logout</NavLink>
        </NavItem>
      </>
    )
  }

  const handleLogOut = () => {
    onLogout()

    return <Redirect to="/sign-in" />
  }

  return (
    <Navbar color="faded" light>
      <NavbarBrand href="/">React Login</NavbarBrand>
      <Nav right>
        {
          AuthService.isLoggedIn() ? 
            authenticatedNav() : 
            unauthenticatedNav()
        }
      </Nav>
    </Navbar>
  )
}

export default NavBar