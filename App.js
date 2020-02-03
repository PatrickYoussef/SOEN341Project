import React, { Component } from "react";
import "./App.css";
import { Form, Input, Label, Button, FormGroup } from "reactstrap";

class App extends Component {
  render() {
    return (
      <Form className="login">
        <h1>StockHut</h1>
        <FormGroup>
          <label class="text-left">Username</label>
          <br></br>
          <input
            type="text"
            placeholder="Username"
            class="form-control validate"
          ></input>
          <label>Password</label>
          <br></br>
          <input
            type="password"
            placeholder="Password"
            class="form-control validate"
          ></input>
        </FormGroup>
        <Button>Sign in</Button>
      </Form>
    );
  }
}
export default App;
