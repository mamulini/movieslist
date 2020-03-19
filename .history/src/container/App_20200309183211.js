import React from 'react';
import './App.css';
import MoviesData from '../MoviesData';
import MovieItem from '../component/MovieItem';




class App extends React.Component{
  // constructor(){
  //   super();
  //   this.state = {
  //     movies: MoviesData
  //   }
  // }


  state = {
    movies: MoviesData,
    moviesWillWatch: [],

    }

  removeMovie = movie => {
    const updateMovies = this.state.movies.filter(function (item){
      return item.id !== movie.id
    });
    this.setState({
      movies: updateMovies
    });
  }

  addMoviesToWillWatch = movie => {
    console.log(movie);
    const addToMoviesWillWatch = ;
    this.setState.moviesWillWatch.push(movie)
    
   
  }



  render(){
      return(  
        <div className={'container'}>
          <div className={'movies'}>{this.state.movies.map( movie => {
          return(
           <MovieItem removeMovie={this.removeMovie} addMoviesToWillWatch={this.addMoviesToWillWatch}  movie={movie} />
          )
          })}
        
          </div>
          <div className={'willWatch'}>
            <p>Will watch: {this.state.moviesWillWatch.length} movies</p>
            <div>{this.state.moviesWillWatch}</div>
          </div>
      </div>
      

    )
  }
}

export default App;
