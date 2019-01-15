import React, { Component } from 'react';

const SignupForm = ({onChange, onSubmit}) => {
  return (
    <form className="myform-signup" id="myform-signup" onSubmit={(event) => onSubmit(event)}>
      <div className="input-field">
        <input type="text" name="user_name" placeholder="Username" id="user-name" onChange={(event) => onChange(event)} required />
      </div>
      <div className="input-field">
        <input type="text" name="email" placeholder="Email" id="email-signup" onChange={(event) => onChange(event)} required />
      </div>
      <div className="input-field">
        <input type="password" name="password" placeholder="Enter Password" id="password-signup" onChange={(event) => onChange(event)} required />
      </div>
      <div className="input-field">
        <input type="text" name="address" placeholder="Enter address" id="address-signup" onChange={(event) => onChange(event)} required />
      </div>
      <div className="input-field-bttn">
        <input type="submit" name="login" value="SIGN UP" />
      </div>
      <div id="signup-link">
        <p>Already have an account? <a href="login.html">Login Here</a></p>
      </div>
    </form>
  )
}

export default SignupForm;
