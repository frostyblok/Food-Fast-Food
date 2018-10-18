/* global window, document, fetch, localStorage, Headers */
const baseUrl = 'https://food-fast-food.herokuapp.com/';

const innerHtmlDisplay = (htmlId, output) => {
  document.getElementById(htmlId).innerHTML = output;
};
const htmlElementDisplay = (htmlId, displayStyle) => {
  document.getElementById(htmlId).style.display = displayStyle;
};

window.onload = () => {
  htmlElementDisplay('main-modal', 'block');
  innerHtmlDisplay('display-para', '<p>Loading menu...</p>');
  const logoutButton = document.querySelector('.logout-link');
  logoutButton.addEventListener('click', () => {
    localStorage.clear();
    window.location.href = '/index.html';
  });
  const myToken = localStorage.getItem('food-fast-food:token');
  // const myToken = '';
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('x-access-token', myToken);
  fetch(`${baseUrl}api/v1/menu`, {
    method: 'GET',
    headers,
  })
    .then(res => res.json())
    .then((data) => {
      if (data.status === 'Success') {
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
              <span class="price">₦${meal.menu_price}</span>
              <a id="edit-now-btn" class="admin-food-edit" data-id="${meal.id}">Edit</a>
              <button id="delete-now-btn" class="admin-food-delete" data-id="${meal.id}">Delete</button>
            </div>
          </li>
        `;
          document.getElementById('available-meal-list').innerHTML += menu;
          const deleteBttn = document.getElementById('delete-now-btn');
          const editBttn = document.getElementById('edit-now-btn');
          deleteBttn.addEventListener('click', deleteMenu);
          editBttn.addEventListener('click', editMenu);
        });
      }
      if (data.allMenu.length === 0) {
        htmlElementDisplay('main-modal', 'block');
        innerHtmlDisplay('display-para', '<p>There are no menu!</p>');
      }
      if (data.status === 'Error') {
        htmlElementDisplay('main-modal', 'block');
        innerHtmlDisplay('display-para', data.message);
      }
    })
    .catch((err) => {
      htmlElementDisplay('main-modal', 'block');
      innerHtmlDisplay('display-para', err.message);
      console.log(err);
    });

  const deleteMenu = (event) => {
    const deleteButton = document.getElementById('delete-now-btn');
    const refId = deleteButton.getAttribute('data-id');
    const menuId = parseInt(refId, 10);
    event.preventDefault();
    fetch(`${baseUrl}api/v1/menu/${menuId}`, {
      method: 'DELETE',
      headers,
    })
      .then(res => res.json())
      .then((data) => {
        if (data.status === 'Success') {
          htmlElementDisplay('complete-modal', 'block');
          innerHtmlDisplay('complete-display-para', data.message);
          console.log('Done!');
          window.location.reload(true);
        }
      }).catch((err) => {
        htmlElementDisplay('main-modal', 'block');
        innerHtmlDisplay('display-para', err.message);
        console.log(err);
      });
  };

  const addMenu = (event) => {
    event.preventDefault();
    const menuName = document.getElementById('menu-food-name').value;
    const menuPrice = document.getElementById('menu-food-price').value;
    const menuImage = document.getElementById('menu-food-image').value;
    const newPrice = parseInt(menuPrice, 10);
    fetch(`${baseUrl}api/v1/menu`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ menu_name: menuName, menu_price: newPrice, menu_image: menuImage }),
    })
      .then(res => res.json())
      .then((data) => {
        if (data.status === 'Success') {
          htmlElementDisplay('complete-modal', 'block');
          innerHtmlDisplay('complete-display-para', data.message);
          console.log('Worked');
          window.location.reload(true);
        }
        if (data.status === 'Error') {
          htmlElementDisplay('complete-modal', 'block');
          innerHtmlDisplay('complete-display-para', data.message);
        }
      })
      .catch((err) => {
        htmlElementDisplay('main-modal', 'block');
        innerHtmlDisplay('display-para', err.message);
        console.log(err);
      });
  };
  document.getElementById('add-food-form').addEventListener('submit', addMenu);

  const editMenu = (event) => {
    const editButton = document.getElementById('edit-now-btn');
    const refId = editButton.getAttribute('data-id');
    const menuId = parseInt(refId, 10);
    localStorage.setItem('adminMenu:id', menuId);
    event.preventDefault();
    fetch(`${baseUrl}api/v1/menu/${menuId}`, {
      method: 'GET',
      headers,
    })
      .then(res => res.json())
      .then((data) => {
        if (data.status === 'Success') {
          htmlElementDisplay('main-modal', 'block');
          innerHtmlDisplay('display-para', '<p>Loading...</p>');
          window.location.href = '/editFood.html';
        }
      }).catch((err) => {
        htmlElementDisplay('main-modal', 'block');
        innerHtmlDisplay('display-para', err.message);
        console.log(err);
      });
  };
};
