import { combineReducers } from "redux";
import LoginReducer from "./Reducers/LoginReducer";
import Balance from "./Reducers/Balance";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

const reducers = combineReducers({
  login: LoginReducer,
  balance: Balance,
});

const store = createStore(reducers, {}, applyMiddleware(thunk));

export default store;
