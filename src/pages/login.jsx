import React, { Component } from "react";
import GoogleLogin from 'react-google-login';

class Login extends Component {
  constructor(props) {
    super()
  }

  handleSuccessGoogle = () => {

  }

  handleFailedGoogle = () => {
    
  }

  render() {
    return(
      <form>
        <h3>Sign In</h3>

        <div className="form-group">
            <label>Email address</label>
            <input type="email" className="form-control" placeholder="Enter email" />
        </div>

        <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Enter password" />
        </div>

        <div className="form-group">
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
            </div>
        </div>

        <button type="submit" className="btn btn-primary btn-block">Submit</button>
          <div className="form-group">
            <div className="google-login">
              <h6>Or</h6>
              <GoogleLogin            
                clientId={"658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"}
                responseType={'id_token'}
                buttonText="Login by Google"
                onSuccess={this.handleSuccessGoogle}
                onFailure={this.handleFailedGoogle}
                cookiePolicy={'single_host_origin'}
              />
            </div>
          </div>
        <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
        </p>
      </form>
    )
  }
}

export default Login