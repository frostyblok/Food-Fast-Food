const baseUrl$ = 'https://food-fast-food.herokuapp.com/';

window.onload = () => {
  const myToken = localStorage.getItem('food-fast-food:token');
  // const myToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwiaWF0IjoxNTM5NjA2OTAyLCJleHAiOjE1Mzk2MTA1MDJ9.ebYtwMH_gbo0vxCM2HnvJTI3Hc_SBKSaKgFTPuWbVFM';
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('x-access-token', myToken);
  fetch(`${baseUrl$}api/v1/orders`, {
    method: 'GET',
    headers,
  })
    .then(res => res.json())
    .then((data) => {
      let menu;
      const { allOrders } = data;
      console.log('orders', allOrders);
      allOrders.forEach((order) => {
        menu = `
        <li>
          <div class="order-disp"><a id="complete-order" data-id="${order.id} href="completedOrders.html">${order.id}</a></div>
          <div class="order-name-cont">${order.food_name}</div>
          <div class="amount-display">${order.food_price}</div>
          <div class="action-customer">BankyMoon</div>
          <div class="action-address">Lekki, Lagos</div>
        <li>
      `;
        document.getElementById('flex-body').innerHTML += menu;
        const orderBttn = document.getElementById('complete-order');
        orderBttn.addEventListener('click', loadOneOrder);
      });
    })
    .catch((err) => {
      console.log(err);
    });

  // const htmlElementDisplay = (htmlId, displayStyle) => {
  //   document.getElementById(htmlId).style.display = displayStyle;
  // };

  const loadOneOrder = (event) => {
    const orderButton = document.getElementById('order-now-btn');
    const refId = orderButton.getAttribute('data-id');
    const orderId = parseInt(refId, 10);
    localStorage.setItem('menu:id', orderId);
    event.preventDefault();
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('x-access-token', myToken);
    fetch(`${baseUrl$}api/v1/orders/${orderId}`, {
      method: 'GET',
      headers,
    })
      .then(res => res.json())
      .then((data) => {
        if (data.status === 'Success') {
          window.location.href = '/completedOrders.html';
        }
      }).catch((err) => {
        console.log(err);
      });
  };
};
