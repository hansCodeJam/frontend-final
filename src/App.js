import React, { Component } from 'react'
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Pages/Home/Main'
import Teams from './components/teams'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Main} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;