import React from "react";

class Toggle extends React.Component {
  constructor() {
    super();

    this.state = {
      bool: true
    };
  }

  handleToggle = () => {
    this.setState({ bool: !this.state.bool });
  };

  render() {
    return (
      <div>
        <h1>{this.state.bool ? "Hello" : "Goodbye"}</h1>
        <button onClick={this.handleToggle}>Toggle</button>
      </div>
    );
  }
}

export default Toggle;