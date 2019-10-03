import React from "react";
import ReactDOM from "react-dom";
import Clock from "./components/clock";
import ToggleStyles from "./components/togglestyles";
import ShowHide from "./components/showhide";
import Toggle from "./components/toggle"
import FontSizer from "./components/fontsizer"
import ColorChange from "./components/changecolor"
import Counter from "./components/counter"
import "./styles.css";

const App = () => {
  return (
    <div>
      <Clock />
      
      <ToggleStyles />

      <ShowHide />

      <Toggle />

      <FontSizer/>

      <ColorChange />

      <Counter />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
