import React, { useState } from "react";
import { Link, Redirect } from 'react-router-dom';
import { useAuth } from "../context/auth";

import { Button, Form, FormGroup, Label, Input, Card, CardBody } from 'reactstrap';
import GoogleLogin from 'react-google-login';

function Login(props) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  const { isLoggedIn, onLogin } = useAuth()

  const handleSuccessGoogle = () => {
    // TODO: Call API to login by Google
  }

  const handleFailedGoogle = () => {
    
  }

  const handlLogin = () => {
    // TODO: Call API to login
    onLogin()
  }

  if (isLoggedIn) {
    return <Redirect to="/profile" />;
  }

  return(
    <Card>
      <CardBody>
        <Form>
          <h3>Sign In</h3>
          <FormGroup>
            <Label for="email">Email address</Label>
            <Input 
              autoFocus
              type="email" 
              name="email" 
              id="email"
              value={email}
              onChange={e => { setEmail(e.target.value) }}
              placeholder="Enter Email"
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input 
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={e => { setPassword(e.target.value) }}
              placeholder="Enter Password" 
            />
          </FormGroup>
          <FormGroup check>
            <Label style={{ fontWeight: 'normal', marginBottom: '20px' }} check>
              <Input type="checkbox" /> Remember me
            </Label>
          </FormGroup>
          <Button 
            block
            color="primary"
            size="md"
            onClick={handlLogin}
          >
            Submit
          </Button>
          <FormGroup>
            <div className="google-login">
              <h6>Or</h6>
              <GoogleLogin            
                clientId={"658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"}
                responseType={'id_token'}
                buttonText="Login by Google"
                onSuccess={handleSuccessGoogle}
                onFailure={handleFailedGoogle}
                cookiePolicy={'single_host_origin'}
              />
              <Link style={{ marginTop: '20px' }} to="/">Forget Password?</Link>
            </div>
          </FormGroup>
          <p className="redirect-note text-right">
              <Link to="/sign-up">Already have an account?</Link>
          </p>
        </Form>
      </CardBody>
    </Card>
  )
}

export default Login