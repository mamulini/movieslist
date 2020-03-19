import React from 'react';

const MovieItem = (props) => {
    console.log(props.movie);
    return  <div key={movie.id} className={'movie__item'}>
    <div className={'movie__poster'}>
      <img src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`} />
    </div>
    <h1 className={'movie__title'}>{props.movie.title}</h1>
    <span className={'movie__rank'}><i class="fab fa-imdb"></i> {props.movie.vote_average}</span>
    <button className={'movie__btn'} onClick={props.removeMovie.bind(this, props.movie)} type='button'>Delete movie</button>
  </div> 
}.




export default MovieItem