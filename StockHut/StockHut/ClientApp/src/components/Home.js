import React, { Component } from "react";
import logo from "../login/stockhut.png";
import "../login/login.css";
import { Route } from "react-router"
import { NavLink, Link } from "react-router-dom";
import LogIn from "./LogIn"

class Home extends Component {


constructor(props) {
    super(props);
    this.state = {
        username: [],
        password: [],
        user: "",
        pass: ""
    }

    this.handleChange = this.handleChange.bind(this)
}
    
componentDidMount() {

    fetch('https://localhost:44314/api/SignIn')
        .then(response => response.json())
        .then(data => {
            this.setState(prevState => {
                username: data.map((obj) => { prevState.username.push(obj.username) })
                password: data.map((obj) => { prevState.password.push(obj.password) })
            })
        })
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <LogIn handleChange={this.handleChange} user={this.state.user} pass={this.state.pass} />
                <h1>{this.state.user} {this.state.pass} {console.log(this.state.user)} {console.log(this.state.pass)}</h1>
            </div>
        );
    }
};

export default Home;
