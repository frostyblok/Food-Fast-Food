/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import LoginPage from './components/pages/LoginPage.jsx';
import SignupPage from './components/pages/SignupPage.jsx';
import HomePage from './components/pages/Homepage.jsx';
import OrderPage from './components/pages/OrderPage.jsx';
import OrderHistory from './components/pages/OrderHistory.jsx';
import ConfirmOrderPage from './components/pages/ConfirmOrderPage.jsx';
import ErrorPage from './components/pages/ErrorPage.jsx';
import SignupForm from './components/forms/SignupForm.jsx';
import DeleteOrder from './components/pages/DeleteOrder.jsx';
import Footer from './components/common/Footer.jsx';
import NavBar from './components/common/NavBar.jsx';

class App extends Component {
  render() {
    return (
      <BrowserRouter> 
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/form" component={SignupForm} />
            <Route path="/signup" component={SignupPage} />
            <Route exact path="/order" component={OrderPage} />
            <Route path="/order-history" component={OrderHistory} />
            <Route path="/menu/:id/confirm-order" component={ConfirmOrderPage} />
            <Route path="/order/:id/delete" component={DeleteOrder} />
            <Route path="/error-page" component={ErrorPage} /> 
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
