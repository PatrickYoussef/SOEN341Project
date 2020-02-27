import React, { Component } from "react";
import logo from "../login/stockhut.png";
import "../login/login.css";
import { NavLink, Link } from "react-router-dom";


const Home = () => {
   
    return (
        
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div
          className="login-page"
          style={{ backgroundColor: "rgb(199, 255, 171)" }}
        >
          <div className="form">
            <form>
              <input type="text" placeholder="username" />
              <input type="password" placeholder="password" />
            <button>login</button>
            <NavLink tag={Link} className="message" to="/signup">Create an account</NavLink>
            </form>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Home;
