import { createSlice } from "@reduxjs/toolkit";

const toggleSlider = createSlice({
  name: "toggle",
  initialState: {
    con: false,
    id: 0,
  },
  reducers: {
    toggle: (state, action) => {
      state.con = action.payload.con;
      state.id = action.payload.id;
    },
  },
});

export const { toggle } = toggleSlider.actions;
export default toggleSlider.reducer;
