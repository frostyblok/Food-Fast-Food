const initState = {
  order: {},
  loader: false,
  userOrders: []
}

const orderReducer = (state = initState, action) => {
  switch (action.type) {
    case 'PLACE_ORDER':
      return {
        ...state,
        type: action.type,
        order: action.payload
      };
    case 'ORDER_ERROR':
    return {
      ...state,
      type: action.type,
      errors: action.error
    };
  case 'GET_USER_ORDERS':
  return {
    ...state,
    type: action.type,
    userOrders: action.payload
  };
  case 'GET_ONE_ORDER':
  return {
    ...state,
    type: action.type,
    oneOrder: action.payload
  };
  case 'DELETE_ORDER':
  return {
    ...state,
    type: action.type,
    userOrders: state.userOrders.orders.filter(order => order.id !== action.id)
  };
  default:
    return state;
  }
}

export default orderReducer;