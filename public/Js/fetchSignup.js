document.getElementById('myform-signup').addEventListener('submit', userSignup);

const baseUrl = 'https://food-fast-food.herokuapp.com/';

const userSignup = (event) => {
  event.preventDefault();
  const userName = document.getElementById('user_name').value;
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
        window.location.href = '/order.html';
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
