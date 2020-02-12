import React from "react";
import logo from "./stockhut.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="signup-page" style={{backgroundColor: "rgb(199, 255, 171)"}}>
        <div className="form">
          <form className="register-form">
            <input type="text" placeholder="name"/>
            <input type="password" placeholder="password"/>
            <input type="text" placeholder="email address"/>
            <button>Create</button>
            <p className="message"><a href="App.js">Sign In</a></p>
          </form>
        </div>
      </div>

      </header>
    </div>
  );
}

export default App;