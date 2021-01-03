import React, { Component } from "react";
import User from "./User";
import PropTypes from 'prop-types';

class UserList extends Component {
  state = {
    displayGame: true,
  };

  updateDisplayGame = () => {
    this.setState((oldState) => ({
      displayGame: !oldState.displayGame,
    }));
  };

  render() {
    const { userInfos } = this.props;
    const { displayGame } = this.state;
    const gameToggleButton = (
      <button className="smallButton" onClick={this.updateDisplayGame}>
        {displayGame ? "Hide " : "Show "}
        the Number of Games Played
      </button>
    );

    return (
      <div>
      <h1>Users</h1>
      {userInfos && userInfos.length >0 ? gameToggleButton : ""}
        <ol>
          {userInfos.map((user) => (
              <User
                key={user.userName}
                displayGame={displayGame}
                user={user}
              />
            )
          )}
        </ol>
      </div>
    );
  }
}

UserList.propTypes = {
  userInfos: PropTypes.array.isRequired,
}

export default UserList;
