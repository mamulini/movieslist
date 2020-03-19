import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

const movie = {
    tittle: 'Avangers: Infinity wars',
    vote: 8.1
}

function MovieItem(props) {
    console.log(props);
    return <div>

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
