const IdReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case "idAdd":
      return (state = payload);
    default:
      return state;
  }
};

export default IdReducer;
