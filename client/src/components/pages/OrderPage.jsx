import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllMenu } from '../../actions/menuAction';
import SideBar from '../common/SideBar.jsx';
import MainBar from '../common/MainBar.jsx';
import setStorage from '../../helpers/setStorage';

export class OrderPage extends Component {
  componentDidMount() {
    this.props.getAllMenu();
  }

  handleOrder = (id) => {
    const { history } = this.props;
    setStorage('menu-id', id);
    history.push(`/menu/${id}/confirm-order`);
  }
  render() {
    const { menus, loader } = this.props.menuList;
    return (
      <section className="row-main">
        <div className="container">
          <SideBar />
          <MainBar
           menus={menus}
           loader={loader}
           onOrder={this.handleOrder}
          />
        </div>
      </section>
     );
  }
}

const mapStateToProps = ({menuList}) => {
  return { 
    menus: menuList.menus,
    menuList
   }
}

export default connect(mapStateToProps, { getAllMenu })(OrderPage);