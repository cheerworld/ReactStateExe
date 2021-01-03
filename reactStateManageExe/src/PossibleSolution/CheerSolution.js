import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    const initialNumArr = this.ramdonNumArr();
    console.log(initialNumArr);
    this.state = {
      numQuestions: 0,
      numCorrect: 0,
      value1: initialNumArr[0],
      value2: initialNumArr[1],
      value3: initialNumArr[2],
      proposedAnswer: initialNumArr[3],
    };
  }

  ramdonNumArr = () => {
    const value1 = Math.floor(Math.random() * 100);
    const value2 = Math.floor(Math.random() * 100);
    const value3 = Math.floor(Math.random() * 100);
    const proposedAnswer =
      Math.floor(Math.random() * 3) + value1 + value2 + value3;
    return [value1, value2, value3, proposedAnswer];
  };

  onChange = (e) => {
    console.log(e.target.value);
    const answer =
      this.state.value1 + this.state.value2 + this.state.value3 ===
      this.state.proposedAnswer
        ? true
        : false;
    console.log(answer);
    const right = answer.toString() === e.target.value ? true : false;

    //{numCorrect: currState.numCorrect+1}
    if (right) {
      console.log(right);
      this.setState((currState) => {
        return {
          numCorrect: currState.numCorrect + 1,
        };
      });
    }

    this.setState((currState) => {
      const refreshNumArr = this.ramdonNumArr();
      console.log(refreshNumArr);
      return {
        value1: refreshNumArr[0],
        value2: refreshNumArr[1],
        value3: refreshNumArr[2],
        proposedAnswer: refreshNumArr[3],
        numQuestions: currState.numQuestions + 1,
      };
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer}`}</p>
          </div>
          <button onClick={this.onChange} value="true">
            True
          </button>
          <button onClick={this.onChange} value="false">
            False
          </button>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
