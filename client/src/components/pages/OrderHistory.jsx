import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getUserOrders} from '../../actions/orderAction';
import SideBar from '../common/SideBar.jsx';
import Main from '../common/Main.jsx';
import FlexContainer from '../common/FlexContainer.jsx';
import HistoryList from '../common/HistoryList.jsx';
import Spinner from '../common/Spinner.jsx';
import setStorage from '../../helpers/setStorage';

export class OrderHistory extends Component {
  componentDidMount() {
    const {getUserOrders} = this.props;
    getUserOrders();
  }

  handleDelete = (id) => {
    const {history} = this.props;
    setStorage('order-id', id);
    history.push(`/order/${id}/delete`);
  }
  render() {
    const {loader, orders} = this.props;
    return (
    <section className="row-main">
      <div className="container">
        <SideBar />
        <Main>
          <div className="order-history-text">
            <h4>Order History</h4>
          </div>
          <FlexContainer />
          <ul id="flex-body" className="flex-body">
            {
              !loader && orders ? (orders.map(order => {
              return <HistoryList
              key={order.id}
               order={order}
               onDelete={this.handleDelete}
              />})) : <Spinner />
            }
          </ul>
        </Main>
      </div>
    </section>
    );
  }
}

const mapStateToProps = ({placedOrder}) => {
  return {
    loader: placedOrder.loader,
    orders: placedOrder.userOrders.orders
  }
}

export default connect(mapStateToProps, {getUserOrders})(OrderHistory);
