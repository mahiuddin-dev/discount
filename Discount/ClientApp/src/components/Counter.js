import React, { Component } from 'react';

export class Counter extends Component {
  static displayName = Counter.name;

  constructor(props) {
    super(props);
    this.state = { currentCount: 0 };
    this.incrementCounter = this.incrementCounter.bind(this);
    this.decrementCounter = this.decrementCounter.bind(this);
    }

  incrementCounter() {
    this.setState({
      currentCount: this.state.currentCount + 1
    });
    }

    decrementCounter() {
        if (this.state.currentCount > 0) {
            this.setState({ currentCount: this.state.currentCount - 1 })
        }
    }

  render() {
    return (
      <div>
        <h1>Counter</h1>

        <p>This is a simple example of a React component.</p>

       
            <button className="btn btn-primary" onClick={this.incrementCounter}>Increment</button>

            <span className="m-2">Current count: <strong>{this.state.currentCount}</strong></span>

            <button className="btn btn-danger ml-2" onClick={this.decrementCounter} >Decrement</button>

      </div>
    );
  }
}
