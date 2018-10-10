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
             <a onclick="openModal()" href="#">ORDER NOW</a>
           </div>
           <div id="simpleModal">
             <div class="modal-content">
               <h3 class="modal-confirm">Confirm Order?</h3>
               <a class="modal-button-yes" href="confirmOrder.html">Yes</a>
               <a onclick="closeModal()" id="modal-button-no" href="#">No</a>
             </div>
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
