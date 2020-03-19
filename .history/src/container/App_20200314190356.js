import React from 'react';
import './App.css';
// import MoviesData from '../MoviesData';
import MovieItem from '../component/MovieItem';
import MovieTabs from '../component/MovieTabs';
import WishList from '../component/WishList';
import {API_URL,API_KEY_3} from '../utils/api';




class App extends React.Component{
  constructor(){
    super();
    this.state = {
      movies: [],
      moviesWillWatch: [],
      sortBy: 'popularity.desc',
      totalResults: 0,
      curentPage: 1,
      page: 5,
      totalPages: 0
  
      }

      console.log('Constructor');
  }

 componentDidMount() {
  this.getmMovies();
   console.log('componentDidMount');
 }

 componentDidUpdate(prevProps, prevState){
   if(prevState.sortBy !== this.state.sortBy){
    this.getmMovies();
    console.log('compoDidupdate');
   }
 }

 getmMovies = () => {
  fetch(`${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sortBy}`).then( response => {
    return response.json()
  }).then( data => {
    
    this.setState({
      movies: data.results,
      totalPages: data.total_pages,
      totalResults: data.total_results
    });
    console.log(data);
  });
 }


  removeMovie = movie => {
    const updateMovies = this.state.movies.filter(function (item){
      return item.id !== movie.id;
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

  nextPage = pageNumber => {
    fetch(`${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sortBy}&page=${pageNumber}`).then( response => {
      return response.json()
    }).then( data => {
      
      this.setState({
        movies: data.results,
        totalPages: data.total_pages,
        curentPage: pageNumber
      });
    });
  }



  render(){
    const numberPages = Math.floor(this.state.totalResults / 10)
    console.log('render');
      return( 
      <div className='container'>
        <MovieTabs sortBy={this.state.sortBy} updateSortBy={this.updateSortBy} />
        <div className={'movie__wrapper'}>
          <div className={'movies'}>{this.state.movies.map( movie => {
          return(
           <MovieItem removeMovie={this.removeMovie} addMoviesToWillWatch={this.addMoviesToWillWatch}  movie={movie} removeMovieFromWillWatch={this.removeMovieFromWillWatch}  />
          )
          })}
        
          </div>
          <div className={'willWatch'}>
            <p>Will watch: {this.state.moviesWillWatch.length} movies</p>
            <div>{this.state.moviesWillWatch.map( item => {
              return <WishList item={item} />
            })}</div>
          </div>
        </div>
      </div> 
      

    )
  }
}

export default App;
