const baseUrl = 'https://food-fast-food.herokuapp.com/';

document.getElementById('myform-login').addEventListener('submit', userLogin);

const userLogin = (event) => {
  event.preventDefault();
  const userEmail = document.getElementById('email-login').value;
  const userPassword = document.getElementById('password-login').value;
  fetch(`${baseUrl}api/v1/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email: userEmail, password: userPassword }),
  })
    .then(res => res.json())
    .then((data) => {
      if (data.status === 'Success') {
        localStorage.setItem('food-fast-food:token', data.token);
        localStorage.setItem('food-fast-food:id', data.id);
        if (data.role === 'user') {
          window.location.href = '/order.html';
        }
        if (data.role === 'admin') {
          window.location.href = './orderList.html';
        }
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
