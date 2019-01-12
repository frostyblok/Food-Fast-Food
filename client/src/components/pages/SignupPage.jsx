/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from '../forms/LoginForm.jsx';
import { signupUser } from '../../actions/userAction';
import SignupForm from '../forms/SignupForm.jsx';
import { SIGNUP_USER } from '../../actions/types.js';

class SignUpPage extends Component {
  state = {
    user_name: '',
    email: '',
    password: '',
    address: ''
  }
  componentDidUpdate() {
    const { currentUser, history } = this.props;
    console.log(this.props);
    if (currentUser.type === SIGNUP_USER) {
      history.push('/');
    }
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  signUpUser = (event) => {
    event.preventDefault();
    const { user_name, email, password, address } = this.state;
    const payload = { user_name, email, password, address };
    this.props.signupUser(payload);
  }
  render() {
    return (
      <section className="signup-page">
		<div className="container">
			<div className="center-font-logo"><i id="logo" className="fa fa-cutlery"></i></div>
			<div className="sign-text">
				<h1 className="sign-style">WELCOME TO<br /><span className="coll-red"> FAST</span> FOOD<br />FAST</h1>
				<h3 className="sign-style-min">Sign Up now and get your food delivered to you <br />anywhere in nigeria</h3>
			</div>
			<div className="login-card signup-card">
				<h1 className="login-text">Sign Up</h1>
				<div className="form">
					<div id="main-modal">
						<div id="main-modal-content">
							<span id="closeBtn">&times;</span>
							<div id="display-para">
							</div>
						</div>
					</div>
          <SignupForm
            onChange={this.onChange}
            onSubmit={this.signUpUser}
          />
				</div>
			</div>
		</div>
	</section>
    );
  }
}

const mapStateToProps = ({currentUser}) => {
  return {currentUser}
}


export default connect(mapStateToProps, {signupUser})(SignUpPage);
