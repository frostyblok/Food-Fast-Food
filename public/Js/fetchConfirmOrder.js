/* global window, document, fetch, localStorage, Headers */
const baseUrl$ = 'https://food-fast-food.herokuapp.com/';

window.onload = () => {
  const logoutButton = document.querySelector('.logout-link');
  logoutButton.addEventListener('click', () => {
    localStorage.clear();
    window.location.href = '/index.html';
  });
  const myToken = localStorage.getItem('food-fast-food:token');
  const menuId = localStorage.getItem('menu:id');
  // const myToken = '';
  // const menuId = 1;
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('x-access-token', myToken);
  fetch(`${baseUrl$}api/v1/menu/${menuId}`, {
    method: 'GET',
    headers,
  })
    .then(res => res.json())
    .then((data) => {
      if (data.status === 'Success') {
        const order = `
            <h2 class="confirm-order-card-text">Confirm Order</h2>
            <div class="confirm-order-container">
              <div class="confirm-order-img">
                <h3 class="confirm-order-food-name">${data.menu.menu_name}</h3>
                <img src="${data.menu.menu_image}">
              </div>
              <div class="confirm-order-select">
                <h4>Quantity:</h4>
                <select class="slect-style" id="slect-style-${data.menu.id}">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                </select>
              </div>
              <div class="complete-order-link">
                <button data-name="${data.menu.menu_name}" data-price="${data.menu.menu_price}" data-id="${data.menu.id}" id="user-confirm-order" href="#">Complete Order</button>
              </div>
            </div>
          `;
        document.getElementById('confirm-order-card').innerHTML = order;
        const confirmOrderBttn = document.getElementById('user-confirm-order');
        confirmOrderBttn.addEventListener('click', confirmOrder);
      }
      // } else {
      //   htmlElementDisplay('confirm-order-error-modal', 'block');
      //   htmlElementDisplay('confirm-order-card', 'none');
      // }
    }).catch((err) => {
      console.log(err);
    });

  const confirmOrder = (event) => {
    event.preventDefault();
    const confirmOrderBtn = document.getElementById('user-confirm-order');
    const id = confirmOrderBtn.getAttribute('data-id');
    const quantitySelector = document.getElementById(`slect-style-${id}`);
    const foodName = confirmOrderBtn.getAttribute('data-name');
    const foodPrice = confirmOrderBtn.getAttribute('data-price');
    const quantity = parseInt(quantitySelector.options[quantitySelector.selectedIndex].text, 10);
    fetch(`${baseUrl$}api/v1/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': `${myToken}`,
      },
      body: JSON.stringify({ food_name: foodName, food_price: foodPrice, quantity }),
    })
      .then(res => res.json())
      .then((data) => {
        if (data.status === 'Success') {
          console.log('works');
          // htmlElementDisplay('simpleModal', 'block');
        }
        // htmlElementDisplay('simpleModal', 'block');
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
