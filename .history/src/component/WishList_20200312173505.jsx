import React from 'react';

const WishList = props => {
    const {item}= props;

    return(
        <h2 key={item.id}>{item.title}</h2>
        <p>{item.vote_avarage}</p>
        
        )
    
}

export default WishList