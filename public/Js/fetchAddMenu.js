const baseUrl = 'https://food-fast-food.herokuapp.com/';

const addFood = (event) => {
  event.preventDefault();
  const myToken = localStorage.getItem('food-fast-food:token');
  // const myToken = '';
  const menuName = document.getElementById('menu-food-name').value;
  const menuPrice = document.getElementById('menu-food-price').value;
  const menuImage = document.getElementById('menu-food-image').value;
  const myMenu = menuName.toString();
  console.log(myMenu);
  console.log(menuPrice);
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('x-access-token', myToken);
  fetch(`${baseUrl}api/v1/menu`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ mennu_name: myMenu, menu_price: menuPrice, menu_image: menuImage }),
  })
    .then(res => res.json())
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
