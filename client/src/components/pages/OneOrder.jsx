import React, { Component } from 'react';

export class OneOrder extends Component {
  state = {
    foodQuantity: '1'
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleConfirm = () => {
    const { menu: {menu_name, menu_price}, onConfirm} = this.props;
    const {foodQuantity} = this.state;
    const quantity = parseInt(foodQuantity, 10);
    const price = menu_price * quantity;
    onConfirm(menu_name, price, quantity);
  }
  render() {
    const {menu} = this.props;
    const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    return <div>
        <h2 id="confirm-card-text" className="confirm-order-card-text">
          Confirm Order
        </h2>
        <div id="confirm-order-container" className="confirm-order-container">
          <div className="confirm-order-img">
            <h3 className="confirm-order-food-name">{menu.menu_name}</h3>
            <img id="data-menu-image" src={menu.menu_image} />
          </div>
          <div className="confirm-order-select">
            <h4>Quantity:</h4>
            <select onChange={this.handleChange} name="foodQuantity" className="slect-style" id="slect-style-1">
              {numbers.map(number => {
                return <option key={number}>{number}</option>;
              })}
            </select>
          </div>
          <div className="complete-order-link">
            <button onClick={this.handleConfirm} className="complete-order-green" id="user-confirm-order">
              Complete Order
            </button>
          </div>
        </div>
      </div>;
  }
}

export default OneOrder;
