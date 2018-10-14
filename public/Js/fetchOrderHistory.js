const baseUrl = 'https://food-fast-food.herokuapp.com/';
window.onload = () => {
  const myToken = localStorage.getItem('food-fast-food:token');
  const id = localStorage.getItem('food-fast-food:id');
  // const myToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwiaWF0IjoxNTM5NTU1NTA5LCJleHAiOjE1Mzk1NTkxMDl9.bR-lI8wmah51oq5cOZScyC6n4tWTyyHz0ivvhEOZ9Hc';
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
