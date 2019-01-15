const initState = {
  order: {},
  loader: false
}

const orderReducer = (state = initState, action) => {
  switch (action.type) {
    case 'PLACE_ORDER': 
      return {
        type: action.type,
        order: action.payload
      };
    case 'PLACE_ORDER_ERROR': 
    return {
      type: action.type,
      errors: action.error
    };  
    default:
      return state;
  }
}

export default orderReducer;