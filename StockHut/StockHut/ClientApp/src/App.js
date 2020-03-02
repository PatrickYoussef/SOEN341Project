import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import Home from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Signup } from './components/Signup';
import { NewsFeed } from './components/NewsFeed';
=======
import { StreamApp, NotificationDropdown } from 'react-activity-feed';
>>>>>>> Stashed changes
import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
        <Layout>
            <Route exact path='/' component={Home} />
            <Route path='/counter' component={Counter} />
            <Route path='/fetch-data' component={FetchData} />
            <Route path='/signup' component={Signup} />
            <Route path='/newsfeed' component={NewsFeed} />
        </Layout>          
    );
  }
}
