import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

const movie = {
    tittle: 'Avangers: Infinity wars',
    vote: 8.1,
    img: 'https://static.posters.cz/image/1300/%D0%9A%D0%B0%D0%BB%D0%B5%D0%BD%D0%B4%D0%B0%D1%80/avengers-infinity-war-i62710.jpg',
    overview: 'he Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.'
}

function MovieItem(props) {
    console.log(props);
    return <div>
        {props.data.tittle}
        {props.data.vote}
        {props.data.img}
        {props.data.overview}

        {/* <p>{props.tittle}</p> 
        <p>{props.vote}</p>  */}
   </div>
}

function App() {
    return <div>
        <MovieItem data={movie}

        /> 
    </div>
}

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
