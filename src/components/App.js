import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogIndex from "./HogIndex";

class App extends Component {

  constructor() {
    super()
    // this.state = {
    //   hogs: 
    // }
  }

  render() {
    return (
      <div className="App">
        {/* {hogs[0].name} */}
        <Nav />
        <HogIndex allHogs = {hogs}/>
      </div>
    );
  }
}

export default App;
