import React, { Component } from "react";
import PropTypes from 'prop-types';

class AddUser extends Component {
  state = {
    user: {
      fName: "",
      lName: "",
      userName: "",
      game: 0,
    },
    exist: false,
  };

  updateInput = (e) => {
    const { name, value } = e.target;
    this.setState((currState) => ({
      user: {
        ...currState.user,
        [name]: value,
      },
    }));
  };

  addUserInfo = (e) => {
    e.preventDefault();

    //console.log(e.target);
    const exist = this.avoidSameUsername(this.state.user.userName);
    console.log(exist);
    if (!exist) {
      this.props.updateUserInfos(this.state.user);
    }
    this.setState(() => ({
      exist,
    }));
    this.clearInput();
  };

  avoidSameUsername = (name) => {
    const { userInfos } = this.props;
    console.log(userInfos);
    for (const user of userInfos) {
      console.log(user.userName, name);
      if (user.userName === name) {
        alert("Username alreay exists, please change to another one.");
        return true;
      }
    }
    return false;
  };

  clearInput = () => {
    this.setState((currState) => ({
      user: {
        ...currState.user,
        fName: "",
        lName: "",
        userName: "",
      },
    }));
  };

  inPutAreEmpty = () => {
    return (
      this.state.user.fName === "" ||
      this.state.user.lName === "" ||
      this.state.user.userName === ""
    );
  };

  render() {
    const { fName, lName, userName } = this.state.user;
    return (
      <div>
        <form onSubmit={this.addUserInfo}>
          <input
            name="fName"
            type="text"
            placeholder="First Name"
            value={fName}
            onChange={this.updateInput}
          />
          <input
            name="lName"
            type="text"
            placeholder="Last Name"
            value={lName}
            onChange={this.updateInput}
          />
          <input
            name="userName"
            type="text"
            placeholder="Username"
            value={userName}
            onChange={this.updateInput}
          />
          <button disabled={this.inPutAreEmpty()}>Add</button>
        </form>
        {this.state.exist ? (
          <p className="error">You cannot add a user that already exists.</p>
        ) : (
          ""
        )}
      </div>
    );
  }
}

AddUser.propTypes = {
  userInfos: PropTypes.array.isRequired,
  updateUserInfos: PropTypes.func.isRequired,
}

export default AddUser;
