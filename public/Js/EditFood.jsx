import React, { Component } from 'react';
import MenuForm from '../../client/src/components/forms/MenuForm.jsx';

class EditFood extends Component {
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
                <h4>Edit Food Item</h4>
                <div className="add-new-food">
                  <div id="complete-modal">
                    <div id="complete-modal-content">
                      <span id="complete-closeBtn">&times;</span>
                      <div id="complete-display-para">
                      </div>
                    </div>
                  </div>
                  <MenuForm />
                </div>
              </div>
              <div className="order-history-text">
                <h4>Manage Food Items</h4>
                <div className="available-meal">
                  <div id="main-modal">
                    <div id="main-modal-content">
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
        </div>
      </section>
     );
  }
}
export default EditFood;