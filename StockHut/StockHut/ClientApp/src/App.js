
import React, { Component } from "react";
import { Route } from "react-router";
import { Layout } from "./components/Layout";
import Home from "./components/Home";
import Friends from './components/FriendPage/Friends';
import Signup from "./components/Signup";
import { NewsFeed } from "./components/NewsFeed";
import { ContactUs } from "./components/ContactUs";
import "./custom.css";
import Profile from "./components/Profile";

export default class App extends Component {
  static displayName = App.name;

      render () { 
        return (
           
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/signup' component={Signup} />
                <Route path='/friends' component={Friends} />
                <Route path='/newsfeed' component={NewsFeed} />
                <Route path="/contactus" component={ContactUs} />
                <Route path="/profile" component={Profile} />
            </Layout>
            
        );
      }

}
