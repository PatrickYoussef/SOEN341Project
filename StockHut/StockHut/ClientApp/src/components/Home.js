import React, { Component } from 'react';
import logo from "../login/stockhut.png"
import "../login/login.css"
import "../login/signup.js"

const Home = () => {

        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <div className="login-page" style={{ backgroundColor: "rgb(199, 255, 171)" }}>
                    <div className="form">

                        <form className="login-form" >
                            <input type="text" placeholder="username" />
                            <input type="password" placeholder="password" />
                            <button>login</button>
                            <p className="message"><a href="signup.js">Create an account</a></p>
                        </form>

                    </div>
                </div>

            </header>
        </div>
    
}

export default Home

