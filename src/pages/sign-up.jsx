import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class SignUp extends Component {
  constructor(props) {
    super()
  }

  render() {
    return(
      <Form>
        <h3>Sign Up</h3>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input type="text" name="name" id="exampleEmail" placeholder="Enter name" autoFocus/>
        </FormGroup>
        <FormGroup>
          <Label for="email">Email address</Label>
          <Input type="email" name="email" id="email" placeholder="Enter Email" />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input type="password" name="password" id="password" placeholder="Enter Password" />
        </FormGroup>
        <FormGroup>
          <Label for="passwordConfirmation">Password Confirmation</Label>
          <Input type="password" name="passwordConfirmation" id="passwordConfirmation" placeholder="Enter Password" />
        </FormGroup>
        <Button color="primary" size="md" block>Submit</Button>
        <p className="forgot-password text-right">
            Already registered <a href="/">sign in?</a>
        </p>
      </Form>
    )
  }
}

export default SignUp