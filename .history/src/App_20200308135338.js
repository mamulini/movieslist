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
           <div className={'movie__item'}>
             <h1>{movie.title}</h1>
             <div className={'movie__poster'}>
               <img src={`https://image.tmdb.org/t/p/w500${poster_path}
`}  />
             </div>
           </div>
        )
      })}</div>
      

    )
  }
}

export default App;
