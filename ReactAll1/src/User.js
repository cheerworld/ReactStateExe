import React from 'react';
import PropTypes from 'prop-types';

const User =(props) => {

    return (
      <li className="user">
      <p>Username: {props.user.userName}</p>
      <p>User Played Games Number: {props.displayGame? props.user.game: "*"}</p>
      </li>
    )

}

User.propTypes = {
  user: PropTypes.object.isRequired,
  displayGame: PropTypes.bool.isRequired,
}

export default User;
