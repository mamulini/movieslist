import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

function App() {
    return <div style={{textAlign:'center'}}>hello reacWarriors</div>
}

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
