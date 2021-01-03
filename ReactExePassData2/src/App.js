import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DashBoard from './DashBoard';

/*
Display a list of movies where each movie contains a list of users that favorited it.

For detailed instructions, refer to instructions.md.
*/

const profiles = [
  {
    id: 1,
    userID: '1',
    favoriteMovieID: '1',
  },
  {
    id: 2,
    userID: '2',
    favoriteMovieID: '1',
  },
  {
    id: 3,
    userID: '4',
    favoriteMovieID: '5',
  },
  {
    id: 4,
    userID: '5',
    favoriteMovieID: '2',
  },
  {
    id: 5,
    userID: '3',
    favoriteMovieID: '5',
  },
  {
    id: 6,
    userID: '6',
    favoriteMovieID: '4',
  },
];

const users = {
  1: {
    id: 1,
    name: 'Jane Jones',
    userName: 'coder',
  },
  2: {
    id: 2,
    name: 'Matthew Johnson',
    userName: 'mpage',
  },
  3: {
    id: 3,
    name: 'Autumn Green',
    userName: 'user123',
  },
  4: {
    id: 4,
    name: 'John Doe',
    userName: 'user123',
  },
  5: {
    id: 5,
    name: 'Lauren Carlson',
    userName: 'user123',
  },
  6: {
    id: 6,
    name: 'Nicholas Lain',
    userName: 'user123',
  },
};

const movies = {
  1: {
    id: 1,
    name: 'Planet Earth',
  },
  2: {
    id: 2,
    name: 'Selma',
  },
  3: {
    id: 3,
    name: 'Million Dollar Baby',
  },
  4: {
    id: 4,
    name: 'Forrest Gump',
  },
  5: {
    id: 5,
    name: 'Get Out',
  },
};

/*
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>How Popular is Your Favorite Movie?</h2>
        <MovieLikedBy />
      </div>
    );
  }
}


class MovieLikedBy extends Component {
  render(){
    //console.log(users);
    return (
      <div>
      {Object.values(movies).map(movie=>(
       <div key={movie.id} >
       <h2>{movie.name}</h2>
       <h3>{profiles.find(like=>like.favoriteMovieID==movie.id)?"Liked By:":"None of the current users liked this movie"}</h3>
       <NameList movie={movie} />
       </div>
      ))}
      </div>
    )
 }}


class NameList extends Component {
  render(){
    return (
      <ul>
       {profiles.filter(user=>user.favoriteMovieID==this.props.movie.id).map(printName=>{
        if (printName) {
            const findUser = Object.values(users).find(user=>user.id==printName.userID);
             return <li key={findUser.name}>{`${findUser.name}`}</li>;
         }
          
        })
        }
      </ul>
    )
  }
}
*/

class App extends Component {
  constructor(props){
    super(props);
    this.userLikedMovies={};
    
    profiles.forEach(profile=>{
      const movieID = profile.favoriteMovieID;
      if(this.userLikedMovies[movieID]){
        this.userLikedMovies[movieID].push(profile.userID)
      } else {
          this.userLikedMovies[movieID]=[profile.userID];
        }
    });
  }

  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h1>How Popular is Your Favorite Movie?</h1>
        <DashBoard movies={movies} users={users} userLikedMovies={this.userLikedMovies} />
      </div> 
    );
  }
}

export default App;
