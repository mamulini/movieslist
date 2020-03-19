import React from 'react';


class MovieTabs extends React.Component{
    render(){
        const {sortBy, updateSortby} = this.props
        return(
            <ul className={'movie__tabs nav nav__pils'}>
                <li className={'nav__item'}>
                    <div className={`nav__link ${sortBy === 'popularity.desc' ? 'active' : ''}`}>Popularity desc</div>
                </li>
                <li className={'nav__item'}>
                    <div className={`nav__link ${sortBy === 'revenue.desc' ? 'active' : ''}`}
                    onClick={updateSortby('revenue.desc')}>Revenue desc</div>
                </li>
                <li className={'nav__item'}>
                    <div className={`nav__link ${sortBy === 'vote_average.desc' ? 'active' : ''}`} onClick={updateSortby('vote_average.desc')}>Vote average desc</div>
                </li>
            </ul>
        )
    }
}

export default MovieTabs