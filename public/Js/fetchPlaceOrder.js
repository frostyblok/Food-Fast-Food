const baseUrl = 'https://food-fast-food.herokuapp.com/';

const myToken = localStorage.getItem('food-fast-food:token');

const htmlElementDisplay = (htmlId, displayStyle) => {
  document.getElementById(htmlId).style.display = displayStyle;
};

const confirmOrderBttn = document.getElementById('user-confirm-order');
confirmOrderBttn.onclick = confirmOrder;

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

