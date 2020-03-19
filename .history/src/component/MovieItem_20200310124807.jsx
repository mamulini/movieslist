import React from 'react';

class MovieItem extends React.Component{
  render() {
    return(
      const MovieItem = (props) => {
    
        const {movie, removeMovie, addMoviesToWillWatch} =  this.props 
        return( 
           <div key={movie.id} className={'movie__item'}>
             <div className={'movie__poster'}>
               <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
             </div>
             <h1 className={'movie__title'}>{movie.title}</h1>
             <span className={'movie__rank'}><i class="fab fa-imdb"></i> {movie.vote_average}</span>
             <button className={'movie__will'} onClick={addMoviesToWillWatch.bind(null, movie)} type='button'>Will Watch</button>
             <button className={'movie__btn'} onClick={removeMovie.bind(null, movie)} type='button'>Delete movie</button>
           </div>
        )}
    )
  }

}





export default MovieItem