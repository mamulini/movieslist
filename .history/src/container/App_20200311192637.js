import React from 'react';
import './App.css';
import MoviesData from '../MoviesData';
import MovieItem from '../component/MovieItem';
import {API_URL,API_KEY_3} from '../utils/api';




class App extends React.Component{
  constructor(){
    super();
    this.state = {
      movies: [],
      moviesWillWatch: [],
  
      }

      console.log('Constructor');
  }

  componentDidMount(){
    fetch(`${API_URL}/discover/movie?api_key=${API_KEY_3}`).then( response => response.json() ).then( data =>{
      console.log('then', data.results);
    })
    console.log('componentDidMount');
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
    const updateMoviesWillWatch = [...this.state.moviesWillWatch];
    updateMoviesWillWatch.push(movie);
    console.log(updateMoviesWillWatch);

    this.setState({
      moviesWillWatch: updateMoviesWillWatch
    })
  }

  removeMovieFromWillWatch = movie => {
    const updateMoviesWillWatch = this.state.moviesWillWatch.filter(function (item){
      return item.id !== movie.id
    });
    this.setState({
      moviesWillWatch: updateMoviesWillWatch
    });
  }



  render(){
    console.log('render');
      return(  
      <div className={'container'}>
          <div className={'movies'}>{this.state.movies.map( movie => {
          return(
           <MovieItem removeMovie={this.removeMovie} addMoviesToWillWatch={this.addMoviesToWillWatch}  movie={movie} removeMovieFromWillWatch={this.removeMovieFromWillWatch} />
          )
          })}
        
          </div>
          <div className={'willWatch'}>
            <p>Will watch: {this.state.moviesWillWatch.length} movies</p>
            {/* <div>{this.state.moviesWillWatch}</div> */}
          </div>
      </div>
      

    )
  }
}

export default App;
