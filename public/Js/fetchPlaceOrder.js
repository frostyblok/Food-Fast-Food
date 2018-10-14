const baseUrl = 'https://food-fast-food.herokuapp.com/';

const myToken = localStorage.getItem('food-fast-food:token');

const htmlElementDisplay = (htmlId, displayStyle) => {
  document.getElementById(htmlId).style.display = displayStyle;
};
// const orderBttn = document.getElementById('order-now-btn');

// const loadOneMenu = (event) => {
//   event.preventDefault();
//   const myToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwiaWF0IjoxNTM5NDQxNTg3LCJleHAiOjE1Mzk0NDUxODd9.kP99HZcVyJCAwGZc4kZbjH0McVJsZFKm9j9a4I9176U';

//   const orderButton = document.getElementById('order-now-btn');
//   const id = orderButton.getAttribute('data-id');
//   const headers = new Headers();
//   headers.append('Content-Type', 'application/json');
//   headers.append('x-access-token', myToken);
//   fetch(`${baseUrl}api/v1/orders${id}`, {
//     method: 'GET',
//     headers,
//   })
//     .then(res => res.json())
//     .then((data) => {
//       if (data.status === 'Success') {
//         window.location.href = '../confirmOrder.html';
//         const order = `
//           <h2 class="confirm-order-card-text">Confirm Order</h2>
//           <div class="confirm-order-container">
//             <div class="confirm-order-img">
//               <h3 class="confirm-order-food-name">${data.menu_name}</h3>
//               <img src="${data.menu_image}">
//             </div>
//             <div class="confirm-order-select">
//               <h4>Quantity:</h4>
//               <select class="slect-style" id="slect-style-${data.id}">
//                 <option>1</option>
//                 <option>2</option>
//                 <option>3</option>
//                 <option>4</option>
//                 <option>5</option>
//                 <option>6</option>
//                 <option>7</option>
//                 <option>8</option>
//                 <option>9</option>
//               </select>
//             </div>
//             <div class="complete-order-link">
//               <button data-name="${data.menu_name}" data-price="${data.menu_price}" data-id="${data.id}" id="user-confirm-order" href="#">Complete Order</button>
//             </div>
//           </div>
//          `;
//         document.getElementById('confirm-order-card').innerHTML = order;
//       } else {
//         htmlElementDisplay('confirm-order-error-modal', 'block');
//         htmlElementDisplay('confirm-order-card', 'none');
//       }
//     }).catch((err) => {
//       console.log(err);
//     });
// };
// orderBttn.onclick = loadOneMenu;

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

