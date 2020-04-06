import React, { Component } from "react";
import { Route } from "react-router";
import { Layout } from "./components/Layout";
import Home from "./components/Home";
import { FetchData } from "./components/FetchData";
import { Counter } from "./components/Counter";
import Signup from "./components/Signup";
import { NewsFeed } from "./components/NewsFeed";
import Profile from "./components/Profile";
import "./custom.css";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={Signup} />
        <Route path="/counter" component={Counter} />
        <Route path="/fetch-data" component={FetchData} />
        <Route path="/newsfeed" component={NewsFeed} />
        <Route path="/Profile" component={Profile} />
      </Layout>
    );
  }
}
