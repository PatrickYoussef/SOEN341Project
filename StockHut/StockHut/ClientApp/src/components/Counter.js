import React, { Component } from 'react';


export class Counter extends Component {
    static displayName = Counter.name;

  constructor(props) {
    super(props);
    this.state = { currentCount: 0 };
    this.incrementCounter = this.incrementCounter.bind(this);
  }

  incrementCounter() {
    this.setState({
      currentCount: this.state.currentCount + 1
    });
  }

  render() {
    return (
      <div>
        <h1>Following</h1>

        <p>This is a how many people you are following</p>

        <p aria-live="polite">Current number: <strong>{this.state.currentCount}</strong></p>

        <button className="btn btn-primary" onClick={this.incrementCounter}>Follow more</button>
      </div>
    );
  }
}
