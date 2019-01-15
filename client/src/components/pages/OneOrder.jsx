import React, { Component } from 'react';

export class OneOrder extends Component {
  state = {
    foodQuantity: ''
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
    onConfirm(menu_name, menu_price, quantity);
  }
  render() {
    const {menu} = this.props;
    return ( 
      <div>
        <h2 id="confirm-card-text" className="confirm-order-card-text">Confirm Order</h2>
        <div id="confirm-order-container" className="confirm-order-container">
          <div className="confirm-order-img">
            <h3 className="confirm-order-food-name">{menu.menu_name}</h3>
            <img id="data-menu-image" src={menu.menu_image}/>
          </div>
          <div className="confirm-order-select">
            <h4>Quantity:</h4>
            <select onChange={this.handleChange} name="foodQuantity" className="slect-style" id="slect-style-1">
              <option>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
              <option>13</option>
              <option>14</option>
              <option>15</option>
              <option>16</option>
              <option>17</option>
              <option>18</option>
              <option>19</option>
              <option>20</option>
            </select>
          </div>
          <div className="complete-order-link">
            <button onClick={this.handleConfirm} id="user-confirm-order">Complete Order</button>
          </div>
        </div>
      </div>
    );
  }
}

export default OneOrder;
