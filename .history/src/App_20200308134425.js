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
      <div className={'container'}>{this.state.movies.map((movie) => {
        return(
           <h1>{movie.title}</h1>
        )
      })}</div>
      

    )
  }
}

export default App;
