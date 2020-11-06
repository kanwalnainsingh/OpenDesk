// MDBootstrap css files
import '@fortawesome/fontawesome-free/css/fontawesome.css';
import 'mdbootstrap/css/bootstrap.css';
import 'mdbootstrap/css/mdb.css';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
