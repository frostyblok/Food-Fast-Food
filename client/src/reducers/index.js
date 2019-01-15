import { combineReducers } from 'redux';
import currentUser  from './userReducer';
import menuList from './menuReducer';
import placedOrder from './orderReducer';

const rootReducer = combineReducers({
  currentUser,
  menuList,
  placedOrder
})

export default rootReducer;
