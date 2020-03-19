import React from 'react';

const WishList = props => {
    const {item}= props;

    return(
        <div key={item.id}>
            <h2 className={'wishList__head'}>{item.title}</h2>
            <span className={'movie__rank'}><i class="fab fa-imdb"></i> {item.vote_average}</span>
        </div>
        
        )
    
}

export default WishList