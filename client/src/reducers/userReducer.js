const initState = {
  user: {},
  isAuthenticated: false,
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
    default: 
     return state;
  }
}

export default userReuducer;
