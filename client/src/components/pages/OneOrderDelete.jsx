import React, { Component } from 'react';

export class OneOrderDelete extends Component {

  confirmDelete = () => {
    const {onConfirm} = this.props;
    onConfirm();
  }
  render() {
    const {menus, order: {order}} = this.props;
    const {id} = order;
    const newMenu = menus.find(menu => {
      return menu.id = id;
    });
    const food_image = newMenu.menu_image || '';
    return (
      <div>
        <h2 id="confirm-card-text" className="confirm-order-card-text">Delete Order</h2>
        <div id="confirm-order-container" className="confirm-order-container">
          <div className="confirm-order-img">
            <h3 className="confirm-order-food-name">{order.food_name}</h3>
            <img id="data-menu-image" src={food_image}/>
          </div>
          <div className="complete-order-link">
            <button onClick={this.confirmDelete} className="complete-order-red" id="user-confirm-order">Delete Order</button>
          </div>
        </div>
      </div>
    );
  }
}

export default OneOrderDelete;
