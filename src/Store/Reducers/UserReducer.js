const UserReducer = (state = [], { type, payload }) => {
  switch (type) {
    case "add":
      return [...state, payload];
    case "remove":
      return (state = state.filter((i) => i.id !== payload));
    case "edit":
      console.log(payload.id);
      state.find((i) => (i.id === payload.id ? (i.text = payload.text) : ""));
      console.log(state);
      return state;
    default:
      return state;
  }
};

export default UserReducer;
