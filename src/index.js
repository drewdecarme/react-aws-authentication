import React from 'react';
import ReactDOM from 'react-dom';
import AppRoot from './app/AppRoot';
import registerServiceWorker from './lib/registerServiceWorker';

ReactDOM.render(<AppRoot />, document.getElementById('root'));
registerServiceWorker();
