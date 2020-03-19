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
    movies: MoviesData
  }
  deleteMovie = () => {
    console.log(88);
  }

  removeMovie = movie => {
    const updateMovies = this.state.movies.filter(function (item){
      return item.id !== movie.id
    });
    this.setState({
      movies: updateMovies
    });
  }



  render(){
      return(  
      <div className={'container'}>{this.state.movies.map( movie => {
        return(
           <MovieItem removeMovie={this.removeMovie}  movie={movie} />
        )
        })}
        
      </div>
      
      

    )
  }
}

export default App;
