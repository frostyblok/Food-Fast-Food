/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import LoginPage from './components/LoginPage.jsx';
import SignupPage from './components/SignupPage.jsx';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/signup" component={SignupPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
