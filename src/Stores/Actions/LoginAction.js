export const Right = (bool) => {
  return {
    type: "right",
    payload: bool,
  };
};

export const Wrong = (bool) => {
  return {
    type: "wrong",
    payload: bool,
  };
};

const loginAction = {
  Right,
  Wrong,
};

export default loginAction;
