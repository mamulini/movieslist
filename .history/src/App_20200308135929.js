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
               <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
             </div>
             <span className={'movie__rank'}>{movie.vote_average}</span>
             <button className={'movie__btn'} type='button'>Read more</button>
           </div>
        )
      })}</div>
      

    )
  }
}

export default App;
