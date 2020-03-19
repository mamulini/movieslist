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

  function MoviesList (params) {
    return <h1>{params.title}</h1>
  }

  render(){
    console.log(this);
    return(
      <div>{this.state.movies.map(MoviesList)}</div>
      

    )
  }
}

export default App;
