export const Add = (obj) => {
  return (dispatch) => {
    dispatch({
      type: "add",
      payload: obj,
    });
  };
};

export const Remove = (id) => {
  return (dispatch) => {
    dispatch({
      type: "remove",
      payload: id,
    });
  };
};
