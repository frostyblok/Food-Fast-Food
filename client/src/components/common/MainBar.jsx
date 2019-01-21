import React from 'react';
import MenuList from './MenuList.jsx';
import SearchFood from './SearchFood.jsx';
import MenuTitle from './MenuTitle.jsx';
import Main from './Main.jsx';


const MainBar = ({menus, onOrder, loader}) => {
  return ( 
    <Main>
      <SearchFood />
      <MenuTitle
        menus={menus}
        onOrder={onOrder}
        loader={loader}
      />
    </Main>
  );
}

export default MainBar;
