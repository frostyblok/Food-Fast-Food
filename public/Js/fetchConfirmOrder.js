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
  const menuId = localStorage.getItem('menu:id');
  // const myToken = '';
  // const menuId = 2;
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
        htmlElementDisplay('main-modal', 'none');
        const order = `
            <h2 id="confirm-card-text" class="confirm-order-card-text">Confirm Order</h2>
            <div id="confirm-order-container" class="confirm-order-container">
              <div class="confirm-order-img">
                <h3 class="confirm-order-food-name">${data.menu.menu_name}</h3>
                <img id="data-menu-image" src="${data.menu.menu_image}">
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
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                  <option>13</option>
                  <option>14</option>
                  <option>15</option>
                  <option>16</option>
                  <option>17</option>
                  <option>18</option>
                  <option>19</option>
                  <option>20</option>
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
    }).catch((err) => {
      htmlElementDisplay('main-modal', 'block');
      innerHtmlDisplay('display-para', err.message);
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
          htmlElementDisplay('complete-modal', 'block');
          innerHtmlDisplay('complete-display-para', data.message);
          console.log('works');
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
};
