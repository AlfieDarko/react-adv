import React, { Component } from "react";

class BuggyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(({ counter }) => ({
      counter: counter + 1
    }));
  }

  render() {
    if (this.state.counter === 5) {
      //   Simulate error
      throw new Error("Ooops!");
    }
    return <button onClick={this.handleClick}>{this.state.counter}</button>;
  }
}

export default BuggyComponent;
