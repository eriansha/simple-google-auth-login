import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
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
      <Form>
        <h3>Sign In</h3>
        <FormGroup>
          <Label for="email">Email address</Label>
          <Input type="email" name="email" id="email" placeholder="Enter Email" autoFocus />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input type="password" name="password" id="password" placeholder="Enter Password" />
        </FormGroup>
        <FormGroup check>
          <Label style={{ fontWeight: 'normal', marginBottom: '20px' }} check>
            <Input type="checkbox" /> Remember me
          </Label>
        </FormGroup>
        <Button color="primary" size="md" block>Submit</Button>
        <FormGroup>
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
        </FormGroup>
        <p className="forgot-password text-right">
            Forgot <a href="/">password?</a>
        </p>
      </Form>
    )
  }
}

export default Login