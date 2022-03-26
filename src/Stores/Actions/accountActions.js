export const Add = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "add",
      payload: amount,
    });
  };
};

export const Remove = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "remove",
      payload: amount,
    });
  };
};
