import * as React from 'react';
import { connect } from 'react-redux';
import logo from "/Users/Ayah/Documents/GitHub/SOEN341Project/StockHut/StockHut/ClientApp/src/login/stockhut.png";
import "/Users/Ayah/Documents/GitHub/SOEN341Project/StockHut/StockHut/ClientApp/src/login/login.css";


const Home = () => (
    <div className="App">
        <header className="App-header">

            <img src={logo} className="App-logo" alt="logo" />
            <div className="login-page" style={{ backgroundColor: "rgb(199, 255, 171)" }}>
                <div className="form">

                    <form className="login-form" >
                        <input type="text" placeholder="username" />
                        <input type="password" placeholder="password" />
                        <button>login</button>
                        <p className="message"><a href="signup.tsx">Create an account</a></p>
                    </form>

                </div>
            </div>

        </header>
    </div>
);

export default connect()(Home);
