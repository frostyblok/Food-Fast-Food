import React, { Component } from 'react';

class OrderList extends Component {
  render() {
    return (
    <section className="row-main">
      <div className="container">
        <div className="col-2 sidebar">
          <div className="sidebar-content">
            <h4 className="dashboard-style">Dashboard</h4>
            <ul className="orders-new">
              <li><a href="orderList.html">Orders</a></li>
              <li><a href="foodMenu.html">New Menu</a></li>
            </ul>
          </div>
        </div>
        <div className="col-9 main-interface">
          <div className="main-interface-content">
            <div className="order-history-text">
              <h4>List Of Orders</h4>
            </div>
            <div className="flex-container">
              <div className="order-cont">Order No.</div>
              <div className="order-name-cont">Order Name</div>
              <div className="action-cont">Amount</div>
              <div className="customer-cont">Customer</div>
              <div className="address-cont">Address</div>
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
          </div>
        </div>
      </div>
    </section>
    );
  }
}
export default OrderList;