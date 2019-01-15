import React, { Component } from 'react';
import { connect } from 'react-redux';
import OneOrder from './OneOrder.jsx';
import { getOneMenu } from '../../actions/menuAction';
import { placeOrder } from '../../actions/orderAction';
import Spinner from '../common/Spinner.jsx';

export class ConfirmOrderPage extends Component {

  componentDidMount() {
    this.props.getOneMenu();
  }

  onConfirmOrder = (food_name, food_price, quantity) => {
    const {placeOrder} = this.props;
    const payload = {food_name, food_price, quantity};
    console.log('My payload>>>>>>', payload);
    placeOrder(payload);
  }
  render() {
    const {menu} = this.props.menuList;
    console.log('This is menu>>>>>>>>>>', this.props.menuList);
    console.log('This is the real menu>>>>>>>', menu);
    return (
      <div>
        {!menu ? <Spinner /> : (<section>
        <div className="container">
          <div id="confirm-order-card" className="confirm-order-card">
            <div id="main-modal">
              <div id="main-modal-content">
                <div id="display-para">
                  <OneOrder 
                    menu={menu}
                    onConfirm={this.onConfirmOrder}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>)}
      </div>
      
    
     );
  }
}

const mapStateToProps = ({menuList, placedOrder}) => {
  return {
    menuList,
    placedOrder
  }
}

export default connect(mapStateToProps, {getOneMenu, placeOrder})(ConfirmOrderPage);
