const ToggleReducer = (state = false, { type, payload }) => {
  switch (type) {
    case "toggle":
      return (state = payload);
    default:
      return state;
  }
};

export default ToggleReducer;
