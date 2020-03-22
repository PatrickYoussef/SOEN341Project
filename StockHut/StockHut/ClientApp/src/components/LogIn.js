import React from "react"
import logo from "../login/stockhut.png";
import "../login/login.css";
import { NavLink, Link } from "react-router-dom";


class LogIn extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <div
                        className="login-page"
                        style={{ backgroundColor: "rgb(199, 255, 171)" }}
                    >
                        <div className="form">
                            <form className="login-form">
                                <input
                                    type="text"
                                    placeholder="username"
                                    name="user"
                                    value={this.props.user}
                                    onChange={this.props.handleChange}
                                />
                                <input
                                    type="password"
                                    placeholder="password"
                                    name="pass"
                                    value={this.props.pass}
                                    onChange={this.props.handleChange}
                                />
                                <button>
                                    <NavLink to="/newsfeed" style={{ textDecoration: 'none', color: 'white' }} >Login</NavLink>
                                </button>
                                <p className="message">Or <NavLink exact to="/signup" style={{ textDecoration: 'none', color: 'green' }}>Create an account</NavLink></p>
                            </form>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}


export default LogIn;
