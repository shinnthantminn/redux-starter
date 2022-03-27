const balanceReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case "add":
      return state + payload;
    case "remove":
      return state - payload;
    default:
      return state;
  }
};

export default balanceReducer;
