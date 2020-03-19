import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

function App() {
    return <h1 style={{textAlign:'center', marginTop: '50px'}}>Hello reacWarriors</h1>
}

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
