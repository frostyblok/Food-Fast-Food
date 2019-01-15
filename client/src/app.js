/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import LoginPage from './components/pages/LoginPage.jsx';
import SignupPage from './components/pages/SignupPage.jsx';
import HomePage from './components/pages/Homepage.jsx';
import OrderPage from './components/pages/OrderPage.jsx';
import OrderList from './components/pages/OrderList.jsx';
import OrderHistory from './components/pages/OrderHistory.jsx';
import AddFood from './components/pages/AddFood.jsx';
import EditFood from './components/pages/EditFood.jsx';
import ConfirmOrderPage from './components/pages/ConfirmOrderPage.jsx';
import ErrorPage from './components/pages/ErrorPage.jsx';
import CompletedOrderPage from './components/pages/CompletedOrderPage.jsx';
import SignupForm from './components/forms/SignupForm.jsx';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/form" component={SignupForm} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/order" component={OrderPage} />
          <Route path="/order-list" component={OrderList} />
          <Route path="/order-history" component={OrderHistory} />
          <Route path="/add-menu" component={AddFood} />
          <Route path="/edit-menu" component={EditFood} />
          <Route path="/menu/:id/confirm-order" component={ConfirmOrderPage} />
          <Route path="/completed-order" component={CompletedOrderPage} />
          <Route path="/error-page" component={ErrorPage} />

        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
