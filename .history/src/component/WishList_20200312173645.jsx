import React from 'react';

const WishList = props => {
    const {item}= props;

    return(
        <div key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.vote_avarage}</p>
        </div>
        
        )
    
}

export default WishList