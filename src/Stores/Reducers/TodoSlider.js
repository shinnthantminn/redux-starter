import { createSlice } from "@reduxjs/toolkit";

const TodoSlider = createSlice({
  name: "Todo",
  initialState: [],
  reducers: {
    Add: (state, action) => (state = [...state, action.payload]),
    Edit: (state, action) => {
      state = state.find((i) =>
        i.id === action.payload.id ? (i.text = action.payload.text) : ""
      );
    },
    remove: (state, action) =>
      (state = state.filter((i) => i.id !== action.payload.id)),
  },
});

export const { Add, Edit, remove } = TodoSlider.actions;
export default TodoSlider.reducer;
