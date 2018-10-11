const baseUrl = 'https://food-fast-food.herokuapp.com/';

const myToken = localStorage.getItem('food-fast-food:token');

setInterval(loadMenu(), 4000);

const loadMenu = (event) => {
  event.preventDefault();
  fetch(`${baseUrl}api/v1/orders`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': `${myToken}`,
    },
  })
    .then(res => res.json())
    .then((data) => {
      let order;
      data.forEach((meal) => {
        order = `
       <ul class="available-meal-list">
         <li>
           <div class="meal-image">
             <img src="${meal.menu_image}">
           </div>
           <div class="meal-name">
             <h4>${meal.menu_name}</h4>
           </div>
           <div class="meal-price">
             <span class="price">${meal.menu_price}</span>
             <a id="order-now-btn" data-name="${meal.menu_name}" data-id="${meal.id} href="#">ORDER NOW</a>
           </div>
         </li>
       </ul>
       `;
      });
      document.getElementById('available-meal').innerHTML = order;
    })
    .catch((err) => {
      console.log(err);
    });
};
