export const Add = (user) => {
  return {
    type: "add",
    payload: user,
  };
};

export const Remove = (id) => {
  return {
    type: "remove",
    payload: id,
  };
};

export const Edit = (EditUser) => {
  return {
    type: "edit",
    payload: EditUser,
  };
};
