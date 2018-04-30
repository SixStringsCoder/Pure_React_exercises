import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CountingParent from './App';
import registerServiceWorker from './registerServiceWorker';


const Page = () => (
  <div className="body-container">
    <CountingParent />
    <CountingParent />
  </div>
)

ReactDOM.render(<Page />, document.getElementById('root'));
registerServiceWorker();
