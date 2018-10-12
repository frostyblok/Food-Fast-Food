const baseUrl = 'https://food-fast-food.herokuapp.com/';
window.onload = () => {
  const myToken = localStorage.getItem('food-fast-food:token');
  const id = localStorage.getItem('food-fast-food:id');
  fetch(`${baseUrl}api/users/${id}/orders`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': `${myToken}`,
    },
  })
    .then(res => res.json())
    .then((data) => {
      if (data.status === 'Success') {
        window.location.href = '../orderHistory';
        let orders;
        data.forEach((order) => {
          orders = `
          <li>
            <div class="order-disp">${order.id}</div>
            <div class="date-disp">${order.created_at}</div>
            <div class="order-name-disp">${order.food_name}</div>
            <div class="status-disp">${order.status}</div>
            <div class="amount-disp">${order.food_price}</div>
          </li>
          `;
        });
        document.getElementById('flex-body').innerHTML = orders;
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
