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
const userLogin = (event) => {
  event.preventDefault();
  const userEmail = document.getElementById('email-login').value;
  const userPassword = document.getElementById('password-login').value;
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  fetch(`${baseUrl}api/v1/auth/login`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ email: userEmail, password: userPassword }),
  })
    .then(res => res.json())
    .then((data) => {
      if (data.status === 'Success') {
        localStorage.setItem('food-fast-food:token', data.token);
        localStorage.setItem('food-fast-food:id', data.id);
        htmlElementDisplay('login-modal', 'block');
        innerHtmlDisplay('display-para', '<p>Authenticating...</p>');
        htmlElementBackgroundColor('login-modal-content', 'green');

        if (data.role === 'user') {
          window.location.href = '/order.html';
        }
        if (data.role === 'admin') {
          window.location.href = '/orderList.html';
        }
      }
      if (data.status === 'Error') {
        htmlElementDisplay('main-modal', 'block');
        innerHtmlDisplay('display-para', data.message);
        htmlElementBackgroundColor('main-modal-content', '#f17878');
      }
    })
    .catch((err) => {
      htmlElementDisplay('main-modal', 'block');
      innerHtmlDisplay('display-para', err.message);
      htmlElementBackgroundColor('main-modal-content', '#f17878');
      console.log(err);
    });
};
document.getElementById('myform-login').addEventListener('submit', userLogin);
