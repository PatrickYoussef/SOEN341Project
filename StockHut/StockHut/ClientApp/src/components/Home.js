import React, { Component } from "react";
import logo from "../login/stockhut.png";
import "../login/login.css";
import { Route } from "react-router"
import { NavLink, withRouter } from "react-router-dom";
import LogIn from "./LogIn"
import { NewsFeed } from "./NewsFeed";

class Home extends Component {


constructor(props) {
    super(props);
    this.state = {
        username: [],
        password: [],
        user: "",
        pass: "",
        errors: []
    }

}
    
componentDidMount() {

    fetch('https://localhost:44314/api/Users')
        .then(response => response.json())
        .then(data => {
            this.setState(prevState => {
                username: data.map((obj) => { prevState.username.push(obj.username) })
                password: data.map((obj) => { prevState.password.push(obj.password) })
            })
        })
    }

    showValidationErr(elm, msg) {
        this.setState((prevState) => ({
            errors: [
                ...prevState.errors, {
                    elm,
                    msg
                }
            ]
        }));
    }

    clearValidationErr(elm) {
        this.setState((prevState) => {
            let newArr = [];
            for (let err of prevState.errors) {
                if (elm != err.elm) {
                    newArr.push(err);
                }
            }
            return { errors: newArr };
        })
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
        this.clearValidationErr("user")
        this.clearValidationErr("pass")
    }

    submitHandler = (event) => {
        event.preventDefault();

        let check = true

        if (this.state.user == "") {
            this.showValidationErr("user", "Username cannot be empty !")
            check = false
        } if (this.state.pass == "") {
            this.showValidationErr("pass", "Password cannot be empty !")
            check = false
        } 

        if (check) {
            console.log("in the check")
            let userIndex = this.state.username.indexOf(this.state.user)
            let passIndex = this.state.password.indexOf(this.state.pass)
            console.log(userIndex, passIndex, this.state.pass)
            if (userIndex != -1 && passIndex != -1 && userIndex == passIndex) {
                this.props.history.push("newsfeed", { name: this.state.user })
            } else if (userIndex == -1) {
                this.showValidationErr("user", "Username does not exist !")
            } else if (userIndex != -1 && userIndex != -1 && userIndex != passIndex) {
                this.showValidationErr("user", "Username and password not compatible !")
            }
        }
        
    }

    render() {

        let usernameErr = null, passwordErr = null

        for (let err of this.state.errors) {
            if (err.elm == "user") {
                usernameErr = err.msg
            }
            if (err.elm == "pass") {
                passwordErr = err.msg
            }
        }

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <div
                        className="login-page"
                        style={{ backgroundColor: "rgb(199, 255, 171)" }}
                    >
                        <div className="form">
                            <form className="login-form" onSubmit={this.submitHandler}>
                                <small style={{ fontSize: 12 }}>{usernameErr ? usernameErr : ""}</small>
                                <input
                                    type="text"
                                    placeholder="username"
                                    name="user"
                                    value={this.user}
                                    onChange={this.handleChange}
                                />
                                <small style={{ fontSize: 12 }}>{passwordErr ? passwordErr : ""}</small>
                                <input
                                    type="password"
                                    placeholder="password"
                                    name="pass"
                                    value={this.pass}
                                    onChange={this.handleChange}
                                />
                                <button type="Submit" style={{ textDecoration: 'none', color: 'white' }}> Login</button>
                                <p className="message">Or <NavLink exact to="/signup" style={{ textDecoration: 'none', color: 'green' }}>Create an account</NavLink></p>
                            </form>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
};

export default withRouter(Home);
//<NewsFeed name={this.props.username}/>