import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ControlledInput, NoNumbers } from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<NoNumbers />, document.getElementById('root'));
registerServiceWorker();
