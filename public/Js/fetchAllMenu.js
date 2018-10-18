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
  innerHtmlDisplay('display-para', '<p>Loading Menu...</p>');
  const logoutButton = document.querySelector('.logout-link');
  logoutButton.addEventListener('click', () => {
    localStorage.clear();
    window.location.href = '/index.html';
  });
  const myToken = localStorage.getItem('food-fast-food:token');
  // const myToken = '';
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('x-access-token', myToken);
  fetch(`${baseUrl$}api/v1/menu`, {
    method: 'GET',
    headers,
  })
    .then(res => res.json())
    .then((data) => {
      if (data.status === 'Success') {
        htmlElementDisplay('main-modal', 'none');
        let menu;
        const { allMenu } = data;
        console.log('menu', allMenu);
        allMenu.forEach((meal) => {
          menu = `
            <li>
              <div class="meal-image">
                <img src="${meal.menu_image}">
              </div>
              <div class="meal-name">
                <h4>${meal.menu_name}</h4>
              </div>
              <div class="meal-price">
                <span class="price">#${meal.menu_price}</span>
                <button id="order-now-btn" data-name="${meal.menu_name}" data-id="${meal.id}">ORDER NOW</button>
              </div>
            </li>
          `;
          document.getElementById('available-meal-list').innerHTML += menu;
          const orderBttn = document.getElementById('order-now-btn');
          orderBttn.addEventListener('click', loadOneMenu);
        });
      }
      if (data.allMenu.length === 0) {
        htmlElementDisplay('main-modal', 'block');
        innerHtmlDisplay('display-para', '<p>There are no menu!</p>');
      }
      if (data.status === 'Error') {
        htmlElementDisplay('main-modal', 'block');
        innerHtmlDisplay('display-para', data.message);
      }
    })
    .catch((err) => {
      htmlElementDisplay('login-modal', 'block');
      innerHtmlDisplay('display-para', err.message);
      console.log(err);
    });

  const loadOneMenu = (event) => {
    const orderButton = document.getElementById('order-now-btn');
    const refId = orderButton.getAttribute('data-id');
    const menuId = parseInt(refId, 10);
    localStorage.setItem('menu:id', menuId);
    event.preventDefault();
    fetch(`${baseUrl$}api/v1/menu/${menuId}`, {
      method: 'GET',
      headers,
    })
      .then(res => res.json())
      .then((data) => {
        if (data.status === 'Success') {
          window.location.href = '/confirmOrder.html';
        }
      }).catch((err) => {
        htmlElementDisplay('login-modal', 'block');
        innerHtmlDisplay('display-para', err.message);
        console.log(err);
      });
  };
};
