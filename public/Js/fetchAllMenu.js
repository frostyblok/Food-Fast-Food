const baseUrl$ = 'https://food-fast-food.herokuapp.com/';

window.onload = () => {
  const myToken = localStorage.getItem('food-fast-food:token');
  // const myToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwiaWF0IjoxNTM5NTUxODczLCJleHAiOjE1Mzk1NTU0NzN9.Ho-qRXRRTTBRQNTdTalwxJ561sS0HxCajWKX0Jzxj6Y';
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('x-access-token', myToken);
  fetch(`${baseUrl$}api/v1/menu`, {
    method: 'GET',
    headers,
  })
    .then(res => res.json())
    .then((data) => {
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
            <span class="price">${meal.menu_price}</span>
            <button id="order-now-btn" data-name="${meal.menu_name}" data-id="${meal.id} href="#">ORDER NOW</button>
          </div>
        </li>
      `;
        document.getElementById('available-meal-list').innerHTML += menu;
        const orderBttn = document.getElementById('order-now-btn');
        orderBttn.addEventListener('click', loadOneMenu);
      });
    })
    .catch((err) => {
      console.log(err);
    });

  // const htmlElementDisplay = (htmlId, displayStyle) => {
  //   document.getElementById(htmlId).style.display = displayStyle;
  // };

  const loadOneMenu = (event) => {
    const orderButton = document.getElementById('order-now-btn');
    console.log('message');
    const refId = orderButton.getAttribute('data-id');
    const id = parseInt(refId, 10);
    console.log(id);
    event.preventDefault();
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('x-access-token', myToken);
    fetch(`${baseUrl$}api/v1/menu/${id}`, {
      method: 'GET',
      headers,
    })
      .then(res => res.json())
      .then((data) => {
        if (data.status === 'Success') {
          window.location.href = '/confirmOrder.html';
          const order = `
              <h2 class="confirm-order-card-text">Confirm Order</h2>
              <div class="confirm-order-container">
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
                  <button data-name="${data.menu_name}" data-price="${data.menu_price}" data-id="${data.id}" id="user-confirm-order" href="#">Complete Order</button>
                </div>
              </div>
             `;
          document.getElementById('confirm-order-card').innerHTML = order;
        }
        // } else {
        //   htmlElementDisplay('confirm-order-error-modal', 'block');
        //   htmlElementDisplay('confirm-order-card', 'none');
        // }
      }).catch((err) => {
        console.log(err);
      });
  };
};
