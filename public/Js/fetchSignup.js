/* global window, document, fetch, localStorage, Headers */

const baseUrl = 'https://food-fast-food.herokuapp.com/';

const innerHtmlDisplay = (htmlId, output) => {
  document.getElementById(htmlId).innerHTML = output;
};
const htmlElementDisplay = (htmlId, displayStyle) => {
  document.getElementById(htmlId).style.display = displayStyle;
};
const htmlElementBackgroundColor = (htmlId, color) => {
  document.getElementById(htmlId).style.backgroundColor = color;
};

const userSignup = (event) => {
  event.preventDefault();
  const userName = document.getElementById('user-name').value;
  const userEmail = document.getElementById('email-signup').value;
  const userPassword = document.getElementById('password-signup').value;
  const userAddress = document.getElementById('address-signup').value;
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  fetch(`${baseUrl}api/v1/auth/signup`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      user_name: userName, email: userEmail, password: userPassword, address: userAddress,
    }),
  })
    .then(res => res.json())
    .then((data) => {
      if (data.status === 'Success') {
        localStorage.setItem('food-fast-food:token', data.token);
        localStorage.setItem('food-fast-food:id', data.id);
        htmlElementDisplay('login-modal', 'block');
        innerHtmlDisplay('display-para', '<p>Authenticating...</p>');
        htmlElementBackgroundColor('login-modal-content', 'green');
        window.location.href = '/order.html';
      }
      if (data.status === 'Error') {
        htmlElementDisplay('login-modal', 'block');
        innerHtmlDisplay('display-para', data.message);
        htmlElementBackgroundColor('login-modal-content', '#f17878');
      }
    })
    .catch((err) => {
      htmlElementDisplay('login-modal', 'block');
      innerHtmlDisplay('display-para', err.message);
      htmlElementBackgroundColor('login-modal-content', '#f17878');
      console.log(err);
    });
};
document.getElementById('myform-signup').addEventListener('submit', userSignup);
