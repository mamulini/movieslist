import React from 'react';
import './App.css';
// import MoviesData from '../MoviesData';
import MovieItem from '../component/MovieItem';
import MovieTabs from '../component/MovieTabs';
import {API_URL,API_KEY_3} from '../utils/api';




class App extends React.Component{
  constructor(){
    super();
    this.state = {
      movies: [],
      moviesWillWatch: [],
      sortBy: 'popularity.desc'
  
      }

      console.log('Constructor');
  }

 componentDidMount() {
   fetch(`${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sortBy}`).then( response => {
     return response.json()
   }).then( data => {
     
     this.setState({
       movies: data.results
     })
   })
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
    const updateMoviesWillWatch = this.state.moviesWillWatch.filter( item => {
      return item.id !== movie.id
    });
    this.setState({
      moviesWillWatch: updateMoviesWillWatch
    });
  }

  updateSortBy = value => {
    this.setState({
      sortBy: value
    })
  }



  render(){
    console.log('render');
      return( 
      <div className='container'>
        <MovieTabs sortBy={this.state.sortBy} updateSortBy={updateSortBy} />
        <div className={'movie__wrapper'}>
          <div className={'movies'}>{this.state.movies.map( movie => {
          return(
           <MovieItem removeMovie={this.removeMovie} addMoviesToWillWatch={this.addMoviesToWillWatch}  movie={movie} removeMovieFromWillWatch={this.removeMovieFromWillWatch}  />
          )
          })}
        
          </div>
          <div className={'willWatch'}>
            <p>Will watch: {this.state.moviesWillWatch.length} movies</p>
            {/* <div>{this.state.moviesWillWatch}</div> */}
          </div>
        </div>
      </div> 
      

    )
  }
}

export default App;
