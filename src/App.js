import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

import Login from './pages/login'
import SignUp from './pages/sign-up'
import Home from './pages/home'

function App() {
  return (
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
              <Route exact path='/' component={Login} />
              <Route path="/sign-in" component={Login} />
              <Route path="/sign-up" component={SignUp} />
              <Route path="/home" component={Home} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
