import React, { Component } from 'react';
import { NavMenu } from './Navbar/NavMenu'


class Counter extends Component {

  constructor(props) {
    super(props);
    this.state = { };
  }


  render() {
    return (
        <div>
            <NavMenu />
      </div>
    );
  }
}

export default Friends
