import React, { Component } from 'react';
import logo from "./../login/stockhut.png";
import "./../login/login.css";
import axios from 'axios'
import { NavLink, withRouter } from 'react-router-dom'

class Signup extends Component {

    constructor() {
        super()
        this.state = {
            username: "",
            password: "",
            users: [],
            errors: []
        }
    }

    componentDidMount() {
        fetch('https://localhost:44314/api/Users')
            .then(response => response.json())
            .then(data => {
                this.setState(prevState => {
                    users: data.map((obj) => { prevState.users.push(obj.username) })
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
            for(let err of prevState.errors) {
                if (elm != err.elm) {
                    newArr.push(err);
                }
            }
            return { errors: newArr };
        })
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
        this.clearValidationErr("username")
        this.clearValidationErr("password")
    }

    submitHandler = (event) => {
        event.preventDefault();

        let check = true

        if (this.state.username == "" ) {
            this.showValidationErr("username", "Username cannot be empty !")
            check = false
        } if (this.state.password == "") {
            this.showValidationErr("password", "Password cannot be empty !")
            check = false
        } if (this.state.users.indexOf(this.state.username) != -1) {
            this.showValidationErr("username", "Username already exists !")
            check = false
        }
        if (check) {
            axios.post('https://localhost:44314/api/Users', this.state)
                .then(response => {
                    console.log(response)
                })
                .catch(error => {
                    console.log(error)
                })
            
            this.props.history.push("newsfeed", { name: this.state.username });
        }

        
    }

   

    render() {
        let usernameErr = null, passwordErr = null

        for (let err of this.state.errors) {
            if (err.elm == "username") {
                usernameErr = err.msg
            }
            if (err.elm == "password") {
                passwordErr = err.msg
            }
        }
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <div className="login-page" style={{ backgroundColor: "rgb(199, 255, 171)" }}>
                        <div className="form">
                            <form onSubmit={this.submitHandler}>
                                <small style={{ fontSize: 12 }}>{usernameErr ? usernameErr : ""}</small>
                                <input
                                    type="text"
                                    placeholder="username"
                                    name="username"
                                    value={this.state.username}
                                    onChange={this.handleChange}
                                />
                                <small style={{ fontSize: 12 }}>{passwordErr ? passwordErr : ""}</small> 
                                <input
                                    type="password"
                                    placeholder="password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                />
                                <button type="Submit"> Create Account
                                    {/*<NavLink to="/newsfeed" style={{ textDecoration: 'none', color: 'white' }} onClick={() => this.submitHandler}>Create Account</NavLink>*/}
                                </button>
                                <p className="message">Or <NavLink exact to="/" style={{ textDecoration: 'none', color: 'green' }}>Sign In</NavLink></p>
                            </form>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default withRouter(Signup);