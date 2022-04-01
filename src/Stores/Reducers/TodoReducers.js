const balanceReducers = (state = 0, { type, payload }) => {
  switch (type) {
    case "add":
      return (state = state + payload);
    default:
      return state;
  }
};

export default balanceReducers;
