import React, { Component } from 'react';
import PropTypes from "prop-types";

class MessageList extends Component {
  render(){
    const { user, message } = this.props;
    return (
      <li
        className={message.username === user.username ? "message sender" : "message recipient"}
      >
      <p>{`${message.username}: ${message.text}`}</p>
      </li>
    )
  }
}

MessageList.propTypes = {
  user: PropTypes.object.isRequired,
  message: PropTypes.object.isRequired,
}

export default MessageList;
