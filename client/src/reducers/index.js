import { combineReducers } from 'redux';
import currentUser  from './userReducer';
import menuList from './menuReducer';

const rootReducer = combineReducers({
  currentUser,
  menuList
})

export default rootReducer;
