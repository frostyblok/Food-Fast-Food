import React from 'react';
import Spinner from './Spinner.jsx';
import MenuList from './MenuList.jsx';

const MenuTitle = ({menus}) => {
  return ( 
    <div>
      <div className="menu-list-title">
        <h4>Menu</h4>
      </div>
      <div id="available-meal" className="available-meal">
          <div id="main-modal">
            <div id="main-modal-content">
              <span id="closeBtn">&times;</span>
              <div id="display-para">
              </div>
            </div>
          </div>
          <ul id="available-meal-list" className="available-meal-list">
          {
            !menus ? <Spinner /> : menus.map(menu => {
              return <MenuList key={menu.id} meal={menu}/>
            })
          }
          </ul>
      </div>
    </div>
  );
}

export default MenuTitle;
