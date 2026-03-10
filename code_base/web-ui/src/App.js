import React, { Component } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faFileUpload } from '@fortawesome/free-solid-svg-icons'

import { BrowserRouter } from 'react-router-dom';

const basename = process.env.PUBLIC_URL || '';
import { Routes } from './router/Routes'

library.add(faFileUpload)

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={basename}>
        <Routes />
      </BrowserRouter>
    );
  }
}

export default App;
