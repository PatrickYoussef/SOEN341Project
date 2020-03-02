import React, { Component } from 'react';
import logo from "./../login/stockhut.png";
import "./../login/login.css";

export class Signup extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <div className="login-page" style={{ backgroundColor: "rgb(199, 255, 171)" }}>
                        <div className="form">
                            <form >
                                <input type="text" placeholder="name" />
                                <input type="password" placeholder="password" />
                                <input type="text" placeholder="email address" />
                                <button>Create</button>
                                <p className="message">Or <a href="#Home">Sign In</a></p>
                            </form>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}