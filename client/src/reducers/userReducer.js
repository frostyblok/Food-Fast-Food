const initState = {
  user: {},
  isAuthenticated: false
};

const userReuducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_USER': 
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true
      }
    default: 
     return state;
  }
}

export default userReuducer;
