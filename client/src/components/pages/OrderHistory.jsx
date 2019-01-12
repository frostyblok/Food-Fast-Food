import React, { Component } from 'react';

class OrderHistory extends Component {
  render() { 
    return ( 
    <section className="row-main">
      <div className="container">
        <div className="col-4 sidebar">
          <div className="sidebar-content">
            <h4 className="categories-style">Categories</h4>
            <ul className="menu-history">
              <li><a href="order.html">Menu</a></li>
              <li><a id="order-history-fetch" href="orderHistory.html">Order History</a></li>
            </ul>
          </div>
        </div>
        <div className="col-7 main-interface">
          <div className="main-interface-content">
            <div className="order-history-text">
              <h4>Order History</h4>
            </div>
            <div className="flex-container">
              <div className="order-cont"><h4 className="flex-container-text-style">Order No</h4></div>
              <div className="date-cont"><h4 className="flex-container-text-style">Date<br /> 
              (dd-mm-yyyy)</h4></div>
              <div className="food-hist-cont"><h4 className="flex-container-text-style">Order Name</h4></div>
              <div className="status-cont"><h4 className="flex-container-text-style">Status</h4></div>
              <div className="amount-cont"><h4 className="flex-container-text-style">Amount</h4></div>
            </div>
            <ul id="flex-body" className="flex-body">
                <div id="main-modal">
                  <div id="main-modal-content">
                    <span id="closeBtn">&times;</span>
                    <div id="display-para">
                    </div>
                  </div>
                </div>
            </ul>
            <div id="order-history-modal">
                <div id="order-history-modal-content">
                  <h3>Could not load order history at this time</h3>
                  <a href="./orderHistory.html">Refresh</a>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
    );
  }
}
 
export default OrderHistory;