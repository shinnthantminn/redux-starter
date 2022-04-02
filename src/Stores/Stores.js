import { configureStore } from "@reduxjs/toolkit";
import TodoSlider from "./Reducers/TodoSlider";
import toggleSlider from "./Reducers/ToggleSlider";

const stores = configureStore({
  reducer: {
    todo: TodoSlider,
    toggle: toggleSlider,
  },
});

export default stores;
