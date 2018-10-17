/* global window, document, fetch, localStorage, Headers */
const baseUrl = 'https://food-fast-food.herokuapp.com/';
window.onload = () => {
  const logoutButton = document.querySelector('.logout-link');
  logoutButton.addEventListener('click', () => {
    localStorage.clear();
    window.location.href = '/index.html';
  });
  const myToken = localStorage.getItem('food-fast-food:token');
  const id = localStorage.getItem('food-fast-food:id');
  // const myToken = '';
  // const id = 1;
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('x-access-token', myToken);
  fetch(`${baseUrl}api/v1/users/${id}/orders`, {
    method: 'GET',
    headers,
  })
    .then(res => res.json())
    .then((data) => {
      if (data.status === 'Success') {
        let orderHistory;
        const { orders } = data;
        orders.forEach((order) => {
          orderHistory = `
          <li>
            <div class="order-disp">${order.id}</div>
            <div class="date-disp">${order.created_at}</div>
            <div class="order-name-disp">${order.food_name}</div>
            <div class="status-disp">${order.status}</div>
            <div class="amount-disp">${order.food_price}</div>
          </li>
          `;
          document.getElementById('flex-body').innerHTML += orderHistory;
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
