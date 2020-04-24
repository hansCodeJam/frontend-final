import React, { Component } from 'react'
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './components/Header';

import Teams from './components/Teams'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Header />
        <Route exact path="/" component={Teams} />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;