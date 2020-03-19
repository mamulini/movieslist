import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

function App() {
    return <div style={{textAlign:'center', marginTop: '50px'}}>Hello reacWarriors</div>
}

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
