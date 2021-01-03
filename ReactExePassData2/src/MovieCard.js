import React, { Component } from 'react';
import UserList from './UserList';

class MovieCard extends Component {

  render(){
    const {movie, users, usersLiked} = this.props;
    
    return (
    <li>
      <h2>{movie.name}</h2>
      <h3>Liked By:</h3>
      <UserList 
      users={users}
      usersLiked={usersLiked}
      />
    </li>
    )
  }
}

export default MovieCard;

 