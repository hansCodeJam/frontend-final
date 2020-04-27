import React, { Component } from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
// import Header from './components/Header';
import Main from './components/Pages/Home/Main'
import TeamPage from "./components/Pages/Team/TeamPage"
import './styles/style.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/TeamPage" component={TeamPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;