import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import Dummy from './components/Dummy'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Dummy />, document.getElementById('root'));
registerServiceWorker();
