import React from 'react';
import './App.css';
import MoviesData from './MoviesData';

class App extends React.Component{
  render(){
    console.log(MoviesData);
    return(
      <h1>{MoviesData[4].title}</h1>
      

    )
  }
}

export default App;
