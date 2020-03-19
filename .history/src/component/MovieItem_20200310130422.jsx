import React from 'react';

class MovieItem extends React.Component{
  state = {
    willWatch: false,

  }




  render() {
    const {movie, removeMovie, addMoviesToWillWatch} =  this.props; 
    return( 
          <div key={movie.id} className={'movie__item'}>
             <div className={'movie__poster'}>
               <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
             </div>
             <h1 className={'movie__title'}>{movie.title}</h1>
             <span className={'movie__rank'}><i class="fab fa-imdb"></i> {movie.vote_average}</span>
             {this.state.willWatch 
             ? 
             <button className={'willWatch__btn--succes'} onClick={addMoviesToWillWatch.bind(null, movie)} type='button'>Remove Will Watch</button> 
             : 
             <button className={'willWatch__btn'} onClick={addMoviesToWillWatch.bind(null, movie)} type='button'>Add Will Watch</button>
             }
             
             <button className={'movie__btn'} onClick={removeMovie.bind(null, movie)} type='button'>Delete movie</button>
          </div>
        
    )
  }

}





export default MovieItem