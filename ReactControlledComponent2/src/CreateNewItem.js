import React, { Component } from "react";
import PropTypes from "prop-types";

class CreateNewItem extends Component {
  state = {
    value: "",
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  addItem = (event) => {
    event.preventDefault();
    this.props.updateItems(this.state.value);
    this.clearInput();
  };

  clearInput = () => {
    this.setState({ value: "" });
  };

  inputIsEmpty = () => {
    return this.state.value === "";
  };

  render() {
    return (
      <form onSubmit={this.addItem}>
        <input
          type="text"
          placeholder="Enter New Item"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button disabled={this.inputIsEmpty()}>Add</button>
      </form>
    );
  }
}

CreateNewItem.propTypes = {
  updateItems: PropTypes.func.isRequired,
};

export default CreateNewItem;
