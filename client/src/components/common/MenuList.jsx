import React from 'react';

const MenuList = (props) => {
  const { meal } = props;
  return (
    <li>
      <div className="meal-image">
        <img src="${meal.menu_image}" />
      </div>
      <div className="meal-name">
        <h4>{meal.menu_name}</h4>
      </div>
      <div className="meal-price">
        <span className="price">#{meal.menu_price}</span>
        <button id="order-now-btn" data-name="${meal.menu_name}" data-id="${meal.id}">ORDER NOW</button>
      </div>
    </li>
  );
}

export default MenuList;
