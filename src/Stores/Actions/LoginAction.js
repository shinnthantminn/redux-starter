export const Right = (bool) => {
  return (dispatch) => {
    dispatch({
      type: "right",
      payload: bool,
    });
  };
};

export const Wrong = (bool) => {
  return (dispatch) => {
    dispatch({
      type: "wrong",
      payload: bool,
    });
  };
};
