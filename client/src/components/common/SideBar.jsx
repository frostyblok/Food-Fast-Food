import React from 'react';
import {Link} from 'react-router-dom';

const SideBar = () => {
  return ( 
    <div className="col-4 sidebar">
      <div className="sidebar-content">
        <h4 className="categories-style">Categories</h4>
        <ul className="menu-history">
          <li><Link to="order">Menu</Link></li>
          <li><Link id="order-history-fetch" to="/order-history">Order History</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;