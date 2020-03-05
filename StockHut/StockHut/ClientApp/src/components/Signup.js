import React, { Component } from 'react';
import logo from "./../login/stockhut.png";
import "./../login/login.css";
import axios from 'axios'
import { NavLink } from 'react-router-dom'

class Signup extends Component {

    constructor() {
        super()
        this.state = {
            username: "",
            password: "",
            users: [],
            message: "",
            isNotSameUser: true
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

    updateStateUsersError = () => {
        this.setState({
            message: "User already exists",
            isNotSameUser: "false"
        })
        console.log(this.state);
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    submitHandler = (event) => {
        event.preventDefault() 

        const { users, username, isNotSameUser } = this.state
        for (var i = 0; i < users.length; i++) {
            if (username == users[i]) {
                this.updateStateUsersError()
                break;
            }
        }
        if (isNotSameUser) {
            axios.post('https://localhost:44314/api/Users', this.state)
                .then(response => {
                    console.log(response)
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <div className="login-page" style={{ backgroundColor: "rgb(199, 255, 171)" }}>
                        <div>{this.state.message}</div>
                        <div className="form">
                            <form onSubmit={this.submitHandler}>
                                <input
                                    type="text"
                                    placeholder="name"
                                    name="username"
                                    value={this.state.username}
                                    onChange={this.handleChange}
                                />
                                <input
                                    type="password"
                                    placeholder="password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                />
                                {/*<NavLink to="/newsfeed" type="Submit" onClick={this.handleUser}>Create Account</NavLink>*/}
                                <button type="Submit" onClick={this.handleUser}>Create Account</button>
                                <p className="message">Or <a href="/Home">Sign In</a></p>
                            </form>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default Signup