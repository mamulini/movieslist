import React from 'react';


class MovieTabs extends React.Component{
    render(){
        const {sortBy, updateSortBy} = this.props;
        const handlerClick = value => () => {
            updateSortBy(value);
        };
        const setClassActive = value => sortBy === value ? 'active' : '';
        return(
            <ul className={'movie__tabs nav nav__pils'}>
                <li className={'nav__item'}>
                    <div className={`nav__link ${setClassActive('popularity.desc')}`} onClick={ handlerClick('popularity.desc')}>Popularity desc</div>
                </li>
                <li className={'nav__item'}>
                    <div className={`nav__link ${setClassActive('revenue.desc')}`}
                    onClick={handlerClick('revenue.desc')}>Revenue desc</div>
                </li>
                <li className={'nav__item'}>
                    <div className={`nav__link ${sortBy === 'vote_average.desc' ? 'active' : ''}`} onClick={handlerClick('vote_average.desc')}>Vote average desc</div>
                </li>
            </ul>
        )
    }
}

export default MovieTabs