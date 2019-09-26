import React, { Component } from "react";
import "./App.css";

import List from "./components/list";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My Simple Salesloft App</h1>
        <List />
      </div>
    );
  }
}

export default App;
