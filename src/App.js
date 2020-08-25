import React  from "react";
import './App.css';

import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import PrivateRoute from './components/routes/PrivateRoute';

import Login from './pages/login'
import SignUp from './pages/sign-up'
import Home from './pages/home'
import Profile from './pages/profile'

import NavBar from './components/navbar'

import { AuthProvider } from './context/auth'

function App(props) {

  return (
    
    <Router>
      <AuthProvider>
        <div className="App">
         <NavBar />
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
