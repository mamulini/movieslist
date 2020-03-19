import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

function MovieItem(props) {
    console.log(props);
    return <div>
        <p>Tittle</p> 
        <p>8.0</p> 
   </div>
}

function App() {
    return <div>
        <MovieItem title='new tittle'

        /> 
    </div>
}

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
