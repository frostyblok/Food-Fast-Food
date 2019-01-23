import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

export class NavBar extends Component {

  onLogout = () => {
    localStorage.clear();
  }
  render() {
    const {isAuthenticated} = this.props;
    return (
      <header>
        <div className="container">
          <div className="logo-name">
          <Link to="/"><i id="logo" className="fa fa-cutlery"></i></Link>
            <h1 className="logo-name-style">Fast-<span className="fast-color">Food</span>-Fast</h1>
          </div>
          <div className="login-signup">
            {
              !isAuthenticated ? ( 
              <div>
                <Link className="login-link" to="/login">Log In</Link>
                <Link className="signup-link" to="/signup">Sign Up</Link>
              </div>
             ) : <div><Link onClick={this.onLogout} className="logout-link" to="/">Logout</Link></div>
             }
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = ({currentUser}) => {
  return {
    isAuthenticated: currentUser.isAuthenticated
  }
}

export default connect(mapStateToProps, {})(NavBar);
