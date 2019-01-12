import React from 'react';

const MenuForm = () => {
  return (
    <form id="add-food-form" className="add-food-form">
      <div className="add-food-name">
        <label>Food Name:</label>
        <input type="text" id="menu-food-name" name="food-name" />
      </div>
      <div className="add-food-price">
        <label>Food Price:</label>
        <input type="text" id="menu-food-price" name="food-price" />
      </div>
      <div className="add-food-image">
        <label>Food Image URL:</label>
        <input type="text" id="menu-food-image" name="food-image-url" />
      </div>
      <div className="add-food-button">
        <input type="submit" id="menu-food-add" name="submit" value="Add Food" />
      </div>
    </form>
   )
}

export default MenuForm;