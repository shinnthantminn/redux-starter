const userReducers = (state = [], action) => {
  switch (action.type) {
    case "add":
      console.log(action.payload);
      return [...state, action.payload];
    case "remove":
      return state.filter((i) => i.id !== action.payload);
    default:
      return state;
  }
};

export default userReducers;
