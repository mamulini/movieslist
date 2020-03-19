import React from 'react';
import './App.css';
import MoviesData from './MoviesData';

class App extends React.Component{
  constructor(){
    super();
    this.state{
      movies: MoviesData
    }
  }
  render(){
    console.log(MoviesData);
    return(
      <h1>{MoviesData[0].title}</h1>
      

    )
  }
}

export default App;
