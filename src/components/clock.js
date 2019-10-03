import React from "react";
import moment from "moment";
export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // time: new Date().toLocaleString()
      time: moment().format("h:mm:ss a")
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
      // time: new Date().toLocaleString()
      time: moment().format("h:mm:ss a")
    });
  }
  render() {
    return <h1 className="App-clock">{this.state.time}.</h1>;
  }
}
// export default Clock;
