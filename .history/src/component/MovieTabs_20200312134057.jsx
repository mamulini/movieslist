import React from 'react';


class MovieTabs extends React.Component{
    const {sortBy} = this.props
    render(){
        return(
            <ul className={'movie__tabs nav nav__pils'}>
                <li className={'nav__item'}>
                    <div className={`nav__link ${sortBy === 'Popularity desc' ? 'active' : ''}` }>Popularity desc</div>
                </li>
                <li className={'nav__item'}>
                    <div className={'nav__link'}>Revenue desc</div>
                </li>
                <li className={'nav__item'}>
                    <div className={'nav__link'}>Vote avetage desc</div>
                </li>
            </ul>
        )
    }
}

export default MovieTabs