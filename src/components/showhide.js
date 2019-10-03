import React from "react";
export default class ShowHide extends React.Component {
  constructor() {
    super();
    this.state = {
      text: true
    };
  }
  handleShowHide = blah => {
    this.setState({
      text: blah
    });
  };
  render() {
    return (
      <div className="ShowHide">
        <h1 style={{ display: this.state.text }}>Text</h1>
        <button onClick={() => this.handleShowHide("block")}>Show</button>
        <button onClick={() => this.handleShowHide("none")}>Hide</button>
      </div>
    );
  }
}
