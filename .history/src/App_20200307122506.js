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
      <div>{this.state.movies.map((er) => {
        return <h1>{er.title}</h1>
      })}</div>
      

    )
  }
}

export default App;
