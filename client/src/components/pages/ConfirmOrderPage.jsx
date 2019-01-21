import React, { Component } from 'react';
import { connect } from 'react-redux';
import OneOrder from './OneOrder.jsx';
import { getOneMenu } from '../../actions/menuAction';
import { placeOrder } from '../../actions/orderAction';
import Spinner from '../common/Spinner.jsx';
import { PLACE_ORDER } from '../../actions/types.js';

export class ConfirmOrderPage extends Component {

  componentDidMount() {
    this.props.getOneMenu();
  }
  componentDidUpdate() {
    const { placedOrder, history } = this.props;
    if(placedOrder.type === PLACE_ORDER) {
      history.push('/order-history');
    }
  }

  onConfirmOrder = (food_name, food_price, quantity) => {
    const {placeOrder} = this.props;
    const payload = {food_name, food_price, quantity};
    placeOrder(payload);
  }
  render() {
    const {menu} = this.props;
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
    menu: menuList.menu,
    placedOrder
  }
}

export default connect(mapStateToProps, {getOneMenu, placeOrder})(ConfirmOrderPage);
