import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import Home from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
<<<<<<< Updated upstream
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
<<<<<<< Updated upstream
        <Layout>
            <Route exact path='/' component={Home} />
            <Route path='/counter' component={Counter} />
            <Route path='/fetch-data' component={FetchData} />
            <Route path='/signup' component={Signup} />
            <Route path='/newsfeed' component={NewsFeed} />
        </Layout>
=======
        <StreamApp
            apiKey="du8he7epvp94"
            appId="45206"
            token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiN2Q5Y2U5YzQtNGMxNy00MmI5LTk2MTQtMjlkYTM5MTI2M2ZkIn0.3uwnXzk9OHEchMoEzhDGKvGAuFN6YashNhYaMMvSrqY">
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/counter' component={Counter} />
                <Route path='/fetch-data' component={FetchData} />
            </Layout>
            <NotificationDropdown notify />
        </StreamApp>
      
>>>>>>> Stashed changes
       
    );
  }
}
