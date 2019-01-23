import React, { Component } from 'react';

class CompletedOrderPage extends Component {
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
          <div id="complete-modal">
            <div id="complete-modal-content">
              <span id="complete-closeBtn">&times;</span>
              <div id="complete-display-para">
              </div>
            </div>
          </div>
          <div id="main-interface-content" className="main-interface-content">
            <div id="main-modal">
              <div id="main-modal-content">
                <div id="display-para">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
     );
  }
}
export default CompletedOrderPage;
