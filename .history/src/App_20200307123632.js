import React from 'react';
import './App.css';
import MoviesData from './MoviesData';

class App extends React.Component{
  // constructor(){
  //   super();
  //   this.state = {
  //     movies: MoviesData
  //   }
  // }


  state = {
    movies: MoviesData
  }



  render(){
      return(
      <div>{this.state.movies.map((movie) => {
        return( <h1>{movie.title}</h1>,
      <p>{movie.overview}</p>
        )
      })}</div>
      

    )
  }
}

export default App;
