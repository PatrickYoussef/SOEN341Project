import React, { Component } from "react";
import { NavMenu } from "./Navbar/NavMenu";

export class MyForm extends Component {
  state = {
    name: "",
    email: "",
    message: ""
  };

  constructor(props) {
    super(props);
  }

  handleSubmit = () => {
    console.log(this.state);
    alert("Your email has been submitted.");
  };

  onNameChange = event => {
    this.setState({ name: event.target.value });
  };

  onEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  onMessageChange = event => {
    this.setState({ message: event.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            value={this.state.name}
            onChange={this.onNameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            value={this.state.email}
            onChange={this.onEmailChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            className="form-control"
            rows="5"
            value={this.state.message}
            onChange={this.onMessageChange}
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-success"
          onClick={this.handleSubmit}
        >
          Submit
        </button>
      </React.Fragment>
    );
  }
}

export class ContactUs extends Component {
  render() {
    return (
      <div>
        <NavMenu />
        <br></br>
        <h1>Contact Us</h1>
        <MyForm />
        <br></br>
      </div>
    );
  }
}
