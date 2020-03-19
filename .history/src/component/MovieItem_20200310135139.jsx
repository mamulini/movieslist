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
            (<button type='button' className={'willWatch__btn--succes'}>Remove Will Watch</button> )
             : 
             (<button type='button' className={'willWatch__btn'} onClick={() => {
              this.setState({willWatch: true}); 
              addMoviesToWillWatch.bind(null, movie)} >Add Will Watch </button>)}}
             
             <button className={'movie__btn'} onClick={removeMovie.bind(null, movie)} type='button'>Delete movie</button>
          </div>
        
    )
  }

}





export default MovieItem