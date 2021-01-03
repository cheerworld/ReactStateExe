import React, { Component } from 'react';
import MovieCard from './MovieCard';

class DashBoard extends Component {
 
  render(){
    
    const {movies, users, userLikedMovies} = this.props;
    
    const movieCards = Object.keys(movies).map(key=>(
     <MovieCard 
      key={key} 
      movie={movies[key]}
      users={users}
      usersLiked={userLikedMovies[key]}
      />
     ));
    return <ul>{movieCards}</ul>;
  }
}

export default DashBoard;