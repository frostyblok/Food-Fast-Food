const baseUrl = 'https://food-fast-food.herokuapp.com/';

const myToken = localStorage.getItem('food-fast-food:token');

document.getElementById('user-place-order').addEventListener('click', loadOneMenu);

const loadOneMenu = (event) => {
  event.preventDefault();
  const orderButton = document.getElementById('order-now-btn');
  const id = orderButton.getAttribute('data-id');
  fetch(`${baseUrl}api/v1/orders${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': `${myToken}`,
    },
  })
    .then(res => res.json())
    .then((data) => {
      const order = `
        <div class="confirm-order-container">
          <h2 class="confirm-order-card-text">Confirm Order</h2>
          <div class="confirm-order-img">
            <h3 class="confirm-order-food-name">${data.menu_name}</h3>
            <img src="${data.menu_image}">
          </div>
          <div class="confirm-order-select">
            <h4>Quantity:</h4>
            <select class="slect-style" id="slect-style-${data.id}">
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
            <a data-name="${data.menu_name}" data-price="${data.menu_price}" data-id="${data.id}" id="user-confirm-order" href="#">Complete Order</a>
          </div>
        </div>
       `;
      document.getElementById('confirm-order-card').innerHTML = order;
    }).catch((err) => {
      console.log(err);
    });
};

const htmlElementDisplay = (htmlId, displayStyle) => {
  document.getElementById(htmlId).style.display = displayStyle;
}

document.getElementById('user-confirm-order').addEventListener('click', confirmOrder);

const confirmOrder = (event) => {
  event.preventDefault();
  const token = localStorage.getItem('food-fast-food:token');
  const confirmOrderBtn = document.getElementById('user-confirm-order');
  const id = confirmOrderBtn.getAttribute('data-id');
  const quantitySelector = document.getElementById(`slect-style-${id}`);
  const foodName = confirmOrderBtn.getAttribute('data-name');
  const foodPrice = confirmOrderBtn.getAnimations('data-price');
  const quantity = parseInt(quantitySelector.options[quantitySelector.selectedIndex].text, 10);
  fetch(`${baseUrl}api/v1/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': `${token}`,
    },
    body: JSON.stringify({ food_name: foodName, food_price: foodPrice, quantity }),
  })
    .then(res => res.json())
    .then((data) => {
      if (data.status === 'Success') {
        htmlElementDisplay('simpleModal', 'block');
      }
      htmlElementDisplay('simpleModal', 'block');
    })
    .catch((err) => {
      console.log(err);
    });
};
