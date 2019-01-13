import React, { Component } from 'react';
import SearchForm from '../forms/SearchForm.jsx';

class OrderPage extends Component {
  render() {
    return (
      <section className="row-main">
      <div className="container">
        <div className="col-4 sidebar">
          <div className="sidebar-content">
            <h4 className="categories-style">Categories</h4>
            <ul className="menu-history">
              <li><a href="#">Menu</a></li>
              <li><a id="order-history-fetch" href="orderHistory.html">Order History</a></li>
            </ul>
          </div>
        </div>
        <div className="col-7 main-interface">
          <div className="main-interface-content">
            <div className="search-food">
              <SearchForm />
            </div>
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
                </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
     );
  }
}
export default OrderPage;