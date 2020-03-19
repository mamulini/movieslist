import React from 'react';

const WishList = props => {
    const {item}= props;
    
    return(
        <h2 key={item.id}>{item.title}</h2>
        <span className={'movie__rank'}> {item.vote_average}</span>
        )
    
}