/* global window, document, fetch, localStorage, Headers */
const baseUrl$ = 'https://food-fast-food.herokuapp.com/';

const innerHtmlDisplay = (htmlId, output) => {
  document.getElementById(htmlId).innerHTML = output;
};
const htmlElementDisplay = (htmlId, displayStyle) => {
  document.getElementById(htmlId).style.display = displayStyle;
};

window.onload = () => {
  htmlElementDisplay('main-modal', 'block');
  innerHtmlDisplay('display-para', '<p>Loading Order...</p>');
  const logoutButton = document.querySelector('.logout-link');
  logoutButton.addEventListener('click', () => {
    localStorage.clear();
    window.location.href = '/index.html';
  });
  const myToken = localStorage.getItem('food-fast-food:token');
  const orderId = localStorage.getItem('order:id');
  // const myToken = '';
  // const orderId = 1;
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
        htmlElementDisplay('main-modal', 'none');
        const order = `
          <div class="order-history-text">
            <h4 class="order-number-style">Order Number:</h4>
            <div class="theorder">#${data.order.id}</div>
          </div>
          <div class="order-details-body">
            <div>
              <h5 class="order-details-text">Order Name:</h5>
              <div class="fetchname">${data.order.food_name}</div>
            </div>
            <div>
              <h5 class="order-details-text">Amount:</h5>
              <div class="fetchamount">₦${data.order.food_price}</div>
            </div>
            <div>
              <h5 class="order-details-text">Status:</h5>
              <div class="updatestatus">
                <select id="update-selector-${data.order.id}" style="width: 100%; height: 28px;">
                  <option>Proccessing</option>
                  <option>Completed</option>
                  <option>Cancelled</option>
                </select>
            </div>
            <div>
              <div class="button-action">
                <button id="update-order" data-id="${data.order.id}" class="updateOrder">UPDATE</button>
                <button id="cancel-order" class="deleteOrder">GO BACK</button>
              </div>
            </div>
          </div>
          `;
        document.getElementById('main-interface-content').innerHTML = order;
        const confirmOrderBttn = document.getElementById('update-order');
        const goBackBttn = document.getElementById('cancel-order');
        confirmOrderBttn.addEventListener('click', updateOrder);
        goBackBttn.addEventListener('click', goBack);
      }
    }).catch((err) => {
      htmlElementDisplay('main-modal', 'block');
      innerHtmlDisplay('display-para', err.message);
      console.log(err);
    });

  const updateOrder = (event) => {
    event.preventDefault();
    const confirmOrderBtn = document.getElementById('update-order');
    const id = confirmOrderBtn.getAttribute('data-id');
    const updateSelector = document.getElementById(`update-selector-${id}`);
    const status = (updateSelector.options[updateSelector.selectedIndex].text);
    fetch(`${baseUrl$}api/v1/orders/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': `${myToken}`,
      },
      body: JSON.stringify({ status }),
    })
      .then(res => res.json())
      .then((data) => {
        if (data.status === 'Success') {
          htmlElementDisplay('complete-modal', 'block');
          innerHtmlDisplay('complete-display-para', data.message);
          console.log('done');
        }
        if (data.status === 'Error') {
          htmlElementDisplay('complete-modal', 'block');
          innerHtmlDisplay('complete-display-para', data.message);
        }
      })
      .catch((err) => {
        htmlElementDisplay('complete-modal', 'block');
        innerHtmlDisplay('complete-display-para', err.message);
        console.log(err);
      });
  };

  const goBack = (event) => {
    event.preventDefault();
    window.location.href = '/orderList.html';
  };
};
