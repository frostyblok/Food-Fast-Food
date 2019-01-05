/* eslint-disable class-methods-use-this */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from './LoginForm.jsx';
import { signinUser } from '../actions/userAction';
import setStorage from '../helpers/setStorage';

class Login extends Component {
  state = {
    email: '',
    password: '',
  }

  onChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }
  loginUser = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    const payload = { email, password };
    this.props.signinUser(payload, this.props);
  }
  render() {
    console.log(this.props);
    return (
      <section className="login-page">
        <div className="container">
          <div className="center-font-logo"><i id="logo" className="fa fa-cutlery"></i></div>
          <div className="sign-text">
            <h1 className="sign-style">WELCOME TO<br /><span className="coll-red"> FAST</span> FOOD<br />FAST</h1>
            <h3 className="sign-style-min">Sign In now and get your food delivered to you <br />anywhere in nigeria</h3>
          </div>
          <div className="login-card">
            <h1 className="login-text">Log In</h1>
            <div className="form">
              <div id="main-modal">
                <div id="main-modal-content">
                  <span id="closeBtn">&times;</span>
                  <div id="display-para">
                  </div>
                </div>
              </div>
              <LoginForm
                onChange={this.onChange}
                onSubmit={this.loginUser}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loginUser: state.userLogin
  }
}


export default connect(mapStateToProps, {signinUser})(Login);
