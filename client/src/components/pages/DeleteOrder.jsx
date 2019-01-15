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
    const {oneOrder} = this.props;
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

const mapStateToProps = ({placedOrder}) => {
  return {
    placedOrder,
    oneOrder: placedOrder.oneOrder
  }
}

export default connect(mapStateToProps, {getOneOrder, deleteOrder})(DeleteOrder);