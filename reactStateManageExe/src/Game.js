import React, { Component } from "react";

class Game extends Component {
  constructor(props) {
    super(props);
    const initialNumArr = this.ramdonNumArr();
    console.log(initialNumArr);
    this.state = {
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

  updateState = (newArr) => {
    this.setState((currState) => ({
      value1: newArr[0],
      value2: newArr[1],
      value3: newArr[2],
      proposedAnswer: newArr[3],
    }));
  };

  onChange = (e) => {
    const refreshNumArr = this.ramdonNumArr();
    this.updateState(refreshNumArr);
    const checkedAnswer = this.checkAnswer(e.target.value);
    //console.log(checkedAnswer)
    this.props.onChange(checkedAnswer);
  };

  checkAnswer = (userInput) => {
    const { value1, value2, value3, proposedAnswer } = this.state;
    const rightAnswer = value1 + value2 + value3;
    return (
      (rightAnswer === proposedAnswer && userInput === "true") ||
      (rightAnswer !== proposedAnswer && userInput === "false")
    );
  };

  render() {
    const { value1, value2, value3, proposedAnswer } = this.state;

    return (
      <div>
        <div className="equation">
          <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
        </div>
        <button onClick={this.onChange} value="true">
          True
        </button>
        <button onClick={this.onChange} value="false">
          False
        </button>
      </div>
    );
  }
}

export default Game;
