import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ControlledInput, NoNumbers, Select } from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Select />, document.getElementById('root'));
registerServiceWorker();
