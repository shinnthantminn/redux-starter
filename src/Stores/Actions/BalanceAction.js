export const Add = (amount) => {
  return {
    type: "add",
    payload: amount,
  };
};

export const Remove = (amount) => {
  return {
    type: "remove",
    payload: amount,
  };
};

const balanceActionCreator = {
  Add,
  Remove,
};

export default balanceActionCreator;
