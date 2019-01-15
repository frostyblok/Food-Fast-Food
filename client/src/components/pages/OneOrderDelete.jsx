import React, { Component } from 'react';

export class OneOrderDelete extends Component {

  confirmDelete = () => {
    const {onConfirm} = this.props;
    onConfirm();
  }
  render() {
    const {order: {order}} = this.props;
    return (
      <div>
        <h2 id="confirm-card-text" className="confirm-order-card-text">Delete Order</h2>
        <div id="confirm-order-container" className="confirm-order-container">
          <div className="confirm-order-img">
            <h3 className="confirm-order-food-name">{order.food_name}</h3>
            <img id="data-menu-image" src={order.food_image}/>
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
