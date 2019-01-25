const initState = {
  user: {},
  isAuthenticated: false,
  loader: false
};

const userReuducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_USER': 
      return {
        ...state,
        user: action.payload,
        type: action.type,
        isAuthenticated: true
      };
    case 'SIGN_USER':
      return {
        ...state,
        user: action.payload,
        type: action.type,
        isAuthenticated: true
      };
    case 'USER_ERROR':
    return {
      ...state,
      type: action.type,
      errors: action.error
    };
    case 'SET_STATUS':
    return {
      ...state,
      type: action.type,
      loader: action.status
    };
    case 'LOGOUT':
    return {
      ...state,
      type: action.type,
      isAuthenticated: false
    }
    default: 
     return state;
  }
}

export default userReuducer;
