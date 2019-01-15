import React from 'react';

const SideBar = () => {
  return ( 
    <div className="col-4 sidebar">
      <div className="sidebar-content">
        <h4 className="categories-style">Categories</h4>
        <ul className="menu-history">
          <li><a href="#">Menu</a></li>
          <li><a id="order-history-fetch" href="#">Order History</a></li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;