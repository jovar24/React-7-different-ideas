import React from "react";

class ColorChange extends React.Component {
  constructor() {
    super();

    this.state = {
      color: "Black",
      input: ""
    };
  }

  handleChange = e => {
    this.setState({ input: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ color: this.state.input, input: "" });
  };

  render() {
    return (
      <div>
        <h1 style={{ color: this.state.color }}>{this.state.color}</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="enter color"
            value={this.state.input}
            onChange={this.handleChange}
          />
          <button>Change Color</button>
        </form>
      </div>
    );
  }
}

export default ColorChange;
