import React from 'react';


const Pagination = props => {

   const {pages, nextPage, currentPage} = props;
   const pageLinks = [];

    for(let i = 1; i <= pages + 1; i++){
        let active = currentPage == i ? 'active' : '';
        
        pageLinks.push(<li className={`waves-effect ${active}`} key={i} onClick={() => nextPage(i)}><a href="#!">{i}</a></li>)
    }
    return(

    )
}

export default Pagination