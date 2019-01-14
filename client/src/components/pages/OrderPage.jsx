import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllMenu } from '../../actions/menuAction';
import SideBar from '../common/SideBar.jsx';
import MainBar from '../common/MainBar.jsx';

export class OrderPage extends Component {
  componentDidMount() {
    this.props.getAllMenu();
  }
  render() {
    const { menus } = this.props.menuList;
    return (
      <section className="row-main">
        <div className="container">
          <SideBar />
          <MainBar menus={menus} />
        </div>
      </section>
     );
  }
}

const mapStateToProps = ({menuList}) => {
  return { 
    menus: menuList.menu,
    menuList
   }
}

export default connect(mapStateToProps, { getAllMenu })(OrderPage);