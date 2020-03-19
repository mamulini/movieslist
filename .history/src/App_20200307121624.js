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
    console.log(this);
    return(
      <h1>{this.state.movies[0].title}</h1>
      

    )
  }
}

export default App;
