import React, { Component } from 'react';

class UserList extends Component {
  render(){
    const {users, usersLiked} = this.props;
    if(!usersLiked){
      return <p>None of the current users liked this movie</p>
    } else {
        const userName=usersLiked.map(id=>(
          <li key={id}>{users[id].name}</li>
        ));
      return <ul>{userName}</ul>
      }
  
  }
}

export default UserList;