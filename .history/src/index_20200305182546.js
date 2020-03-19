import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

function MovieItem() {
    return <div>
        <p>Tittle</p> 
   </div>
}

function App() {
    return <div>
        <MovieItem

        /> 
    </div>
}

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
