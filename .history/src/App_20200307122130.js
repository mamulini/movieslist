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
      <div>{this.state.movies[0].title}</div>
      

    )
  }
}

export default App;
