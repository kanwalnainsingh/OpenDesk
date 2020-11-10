import React, { Component } from 'react';
import './App.css';

import { BrowserRouter } from 'react-router-dom';

import Layout from './components/Layout/Layout'
import SetupBuilder from './container/SetupBuilder/SetupBuilder'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout />
        <SetupBuilder />
      </BrowserRouter>
    );
  }
}

export default App;
