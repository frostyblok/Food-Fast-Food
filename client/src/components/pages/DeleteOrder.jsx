import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getOneOrder, deleteOrder } from '../../actions/orderAction';
import Spinner from '../common/Spinner.jsx';
import { DELETE_ORDER } from '../../actions/types';
import OneOrderDelete from './OneOrderDelete.jsx';

export class DeleteOrder extends Component {

  componentDidMount() {
    const {getOneOrder} = this.props;
    getOneOrder();
  }

  handleDelete = () => {
    const {deleteOrder} = this.props;
    deleteOrder();
  }

  componentDidUpdate() {
    const { placedOrder, history } = this.props;
    if(placedOrder.type === DELETE_ORDER) {
      history.push('/order-history');
    }
  }
  render() {
    const {oneOrder, menus} = this.props;
    return (
      <div>
      {!oneOrder ? <Spinner /> : (<section>
      <div className="container">
        <div id="confirm-order-card" className="confirm-order-card">
          <div id="main-modal">
            <div id="main-modal-content">
              <div id="display-para">
                <OneOrderDelete
                  order={oneOrder}
                  onConfirm={this.handleDelete}
                  menus={menus}
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

const mapStateToProps = ({placedOrder, menuList}) => {
  return {
    placedOrder,
    oneOrder: placedOrder.oneOrder,
    menus: menuList.menus
  }
}

export default connect(mapStateToProps, {getOneOrder, deleteOrder})(DeleteOrder);