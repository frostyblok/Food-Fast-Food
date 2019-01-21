import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
  return (
    <header>
      <div class="container">
        <div class="logo-name">
        <Link to="/"><i id="logo" class="fa fa-cutlery"></i></Link>
          <h1 class="logo-name-style">Fast-<span class="fast-color">Food</span>-Fast</h1>
        </div>
        <div class="login-signup">
          <Link className="login-link" to="/login">Log In</Link>
          <Link className="signup-link" to="/signup">Sign Up</Link>
        </div>
      </div>
	</header>
  )
}

export default NavBar;
