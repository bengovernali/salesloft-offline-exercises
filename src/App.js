import React, { Component } from "react";
import "./App.css";

import List from "./components/list";
import Characters from "./components/characters";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My Simple Salesloft App</h1>
        <List />
        <Characters />
      </div>
    );
  }
}

export default App;
