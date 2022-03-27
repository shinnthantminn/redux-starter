const LoginReducer = (state = false, action) => {
  switch (action.type) {
    case "right":
      return (state = action.payload);
    case "wrong":
      return (state = action.payload);
    default:
      return state;
  }
};

export default LoginReducer;
