import React, { Component } from "react";
import PropTypes from "prop-types";

class Form extends Component {
  state = {
    inputMessage: "",
  };

  updateValue = (e) => {
    const { value } = e.target;
    this.setState((currState) => ({
      inputMessage: value,
    }));
  };
  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
  isDisabled = () => {
    return this.state.inputMessage === "";
  };

  clearInput = () => {
    this.setState({ inputMessage: "" });
  };

  submitText = (e) => {
    e.preventDefault();

    const text = this.state.inputMessage;

    this.props.updateTexts(text);
    this.clearInput();
  };
  render() {

    return (
      <form className="input-group" onSubmit={this.submitText}>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your message..."
          value={this.state.inputMessage}
          onChange={this.updateValue}
        />
        <div className="input-group-append">
          <button className="btn submit-button" disabled={this.isDisabled()}>
            SEND
          </button>
        </div>
      </form>
    );
  }
}

Form.propTypes = {
  user: PropTypes.object.isRequired,
  updateTexts: PropTypes.func.isRequired,
}

export default Form;
