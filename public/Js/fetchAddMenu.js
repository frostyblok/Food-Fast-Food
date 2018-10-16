const baseUrl = 'https://food-fast-food.herokuapp.com/';

const addFood = (event) => {
  event.preventDefault();
  const myToken = localStorage.getItem('food-fast-food:token');
  // const myToken = '';
  const menuName = document.getElementById('menu-food-name').value;
  const menuPrice = document.getElementById('menu-food-price').value;
  const menuImage = document.getElementById('menu-food-image').value;
  const newPrice = parseInt(menuPrice, 10);
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('x-access-token', myToken);
  fetch(`${baseUrl}api/v1/menu`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ menu_name: menuName, menu_price: newPrice, menu_image: menuImage }),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.status === 'Success') {
        console.log('Worked');
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
document.getElementById('add-food-form').addEventListener('submit', addFood);
