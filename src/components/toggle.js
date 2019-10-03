import React from "react";

class Toggle extends React.Component {
  constructor() {
    super();
    this.state = {
      bool: true
    };
    handleToggle = {};
  }

  render() {
    return (
      <div>
        <h1> {this.state.bool ? "hello" : "goodbye"}Hello</h1>
        <button onClick={this.handleToggle}> Toggle </button>
      </div>
    );
  }
}
