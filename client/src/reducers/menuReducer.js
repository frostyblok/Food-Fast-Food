const initState = {
  menus: [],
  loader: false
};

const menuReducer = (state = initState, action) => {
  switch (action.type) {
    case 'GET_MENU': 
      return {
        ...state,
        type: action.type,
        menus: action.menu
      };
    case 'GET_ONE_MENU':
    return {
      ...state,
      type: action.type,
      menu: action.menu
    };
    case 'SET_STATUS':
    return {
      ...state,
      type: action.type,
      loader: action.status
    };
    case 'MENU_ERROR':
    return {
      ...state,
      type: action.type,
      errors: action.error
    };
    default: 
     return state;
  }
}

export default menuReducer;
