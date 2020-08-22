import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from './components/routes/PrivateRoute';

import Login from './pages/login'
import SignUp from './pages/sign-up'
import Home from './pages/home'
import Profile from './pages/profile'

import { AuthContext } from './context/auth'

function App(props) {
  return (
    <AuthContext.Provider value={false}>
      <Router>
        <div className="App">
          <Navbar color="faded" light>
            <NavbarBrand href="/">React Login</NavbarBrand>
            <Nav right>
              <NavItem>
                <NavLink href="/sign-in">Sign In</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/sign-up">Sign Up</NavLink>
              </NavItem>
            </Nav>
          </Navbar>

          <div className="auth-wrapper">
            <div className="auth-inner">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/sign-in" component={Login} />
                <Route path="/sign-up" component={SignUp} />
                <PrivateRoute path="/profile" component={Profile} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
