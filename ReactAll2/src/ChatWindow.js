import React, { Component } from "react";
import MessageList from "./MessageList";
import Form from "./Form.js";
import PropTypes from "prop-types";

class ChatWindow extends Component {

  updateTexts = (newText) => {
    this.props.updateTexts(this.props.user.username, newText)
  }

  render() {
    const { user, messages } = this.props;

    return (
      <div className="chat-window">
        <h2>Super Awesome Chat</h2>
        <div className="name sender">{user.username}</div>
        <ul className="message-list">
          {messages.map((message, index) => (
            <MessageList key={index} message={message} user={user} />
          ))}
        </ul>
        <div>
          <Form updateTexts={this.updateTexts} />
        </div>
      </div>
    );
  }
}

ChatWindow.propTypes = {
  user: PropTypes.object.isRequired,
  messages: PropTypes.array.isRequired,
  updateTexts: PropTypes.func.isRequired,
};

export default ChatWindow;
