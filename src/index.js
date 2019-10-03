import React from "react";
import ReactDOM from "react-dom";
import Clock from "./components/clock";
import ToggleStyles from "./components/togglestyles";
import ShowHide from "./components/showhide";

import "./styles.css";

const App = () => {
  return (
    <div>
      <Clock />

      <ToggleStyles />

      <ShowHide />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
