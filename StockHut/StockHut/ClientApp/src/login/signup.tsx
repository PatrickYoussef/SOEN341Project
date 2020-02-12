import React, { Component } from "react";
import logo from "./stockhut.png";
import "./login.css";

class signup extends Component {
    render() {

        return (
            <div className="App">
                <header className="App-header">

                    <img src={logo} className="App-logo" alt="logo" />
                    <div className="signup-page" style={{ backgroundColor: "rgb(199, 255, 171)" }}>
                        <div className="form">
                            <form className="register-form">
                                <input type="text" placeholder="name" />
                                <input type="password" placeholder="password" />
                                <input type="text" placeholder="email address" />
                                <button>Create</button>
                                <p className="message">Or <a href="login-layout.tsx">Sign In</a></p>
                            </form>
                        </div>
                    </div>

                </header>
            </div>
        );
    }
}