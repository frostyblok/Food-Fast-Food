const baseUrl = 'https://food-fast-food.herokuapp.com/';

window.onload = () => {
  const myToken = localStorage.getItem('food-fast-food:token');
  fetch(`${baseUrl}api/v1/orders`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': `${myToken}`,
    },
  })
    .then(res => res.json())
    .then((data) => {
      let menu;
      data.forEach((meal) => {
        menu = `
        <li>
          <div class="meal-image">
            <img src="${meal.menu_image}">
          </div>
          <div class="meal-name">
            <h4>${meal.menu_name}</h4>
          </div>
          <div class="meal-price">
            <span class="price">${meal.menu_price}</span>
            <button id="order-now-btn" data-name="${meal.menu_name}" data-id="${meal.id} href="#">ORDER NOW</button>
          </div>
        </li>
      `;
      });
      document.getElementById('available-meal-list').innerHTML = menu;
    })
    .catch((err) => {
      console.log(err);
    });
};
