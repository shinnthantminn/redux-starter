import { applyMiddleware, combineReducers } from "redux";
import { createStore } from "redux";
import UserReducer from "./Reducers/UserReducer";
import thunk from "redux-thunk";
import ToggleReducer from "./Reducers/ToggleReducer";
import IdReducer from "./Reducers/IdReducer";

const Reducers = combineReducers({
  user: UserReducer,
  toggle: ToggleReducer,
  id: IdReducer,
});

const stores = createStore(Reducers, {}, applyMiddleware(thunk));

export default stores;
