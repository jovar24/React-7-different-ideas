import React from "react";
export default class Counter extends React.Component {
 constructor() {
   super();
   this.state = {
     count: 0
   };
 }
 handleCrement = amt => {
   this.setState({
     count: this.state.count + amt
   });
 };
 render() {
   return (
     <div>
       <h1>{this.state.count}</h1>
       <button onClick={() => this.handleCrement(1)}>Add</button>
       <button onClick={() => this.handleCrement(-1)}>Sub</button>
     </div>
   );
 }
}