import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    query: "",
  };

  updateQuery = (e) => {
    const inputValue = e.target.value;
    this.setState((currState) => ({
      query: inputValue,
    }));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <input
            type="text"
            value={this.state.query}
            placeholder="Say Something"
            onChange={this.updateQuery}
          />
          <p className="echo">Echo:</p>
          <p>{this.state.query}</p>
        </div>
      </div>
    );
  }
}

export default App;
