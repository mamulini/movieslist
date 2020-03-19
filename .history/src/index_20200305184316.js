import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

function MovieItem(props) {
    console.log(props);
    return <div>
        <p>{props.tittle}</p> 
        <p>{props.vote}</p> 
   </div>
}

function App() {
    return <div>
        <MovieItem data=(movies)

        /> 
    </div>
}

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
