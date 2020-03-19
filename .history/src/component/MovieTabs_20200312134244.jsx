import React from 'react';


class MovieTabs extends React.Component{
    const {sortBy} = this.props
    render(){
        return(
            <ul className={'movie__tabs nav nav__pils'}>
                <li className={'nav__item'}>
                    <div className={`nav__link ${sortBy === 'popularity.desc' ? 'active' : ''}`}>Popularity desc</div>
                </li>
                <li className={'nav__item'}>
                    <div className={`nav__link ${sortBy === 'revenue.desc' ? 'active' : ''}`}>Revenue desc</div>
                </li>
                <li className={'nav__item'}>
                    <div className={`nav__link ${sortBy === 'rvote_average.desc' ? 'active' : ''}`}>Vote average desc</div>
                </li>
            </ul>
        )
    }
}

export default MovieTabs