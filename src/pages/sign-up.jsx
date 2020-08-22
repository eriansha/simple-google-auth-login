import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, Card, CardBody } from 'reactstrap';

function SignUp(props) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")

  const handleSignUp = () => {
    // TODO: call sign up API
  }

  return(
    <Card>
      <CardBody>
        <Form>
          <h3>Sign Up</h3>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input 
              autoFocus
              type="text" 
              name="name" 
              id="name"
              value={name}
              onChange={e => { setName(e.target.value) }}
              placeholder="Enter Name"
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email address</Label>
            <Input
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
          <FormGroup>
            <Label for="passwordConfirmation">Password Confirmation</Label>
            <Input 
              type="password"
              name="passwordConfirmation"
              id="passwordConfirmation"
              value={passwordConfirmation}
              onChange={e => { setPasswordConfirmation(e.target.value) }}
              placeholder="Enter Password" 
            />
          </FormGroup>
          <Button 
            block
            color="primary"
            size="md" 
            onClick={handleSignUp}
          >
            Submit
          </Button>
          <p className="redirect-note text-right">
              Already registered? <a href="/sign-in">sign in</a>
          </p>
        </Form>
      </CardBody>
    </Card>
  )
}

export default SignUp