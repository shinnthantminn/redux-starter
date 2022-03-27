import { combineReducers } from "redux";
import LoginReducer from "./Reducers/LoginReducer";
import Balance from "./Reducers/Balance";

const reducers = combineReducers({
  login: LoginReducer,
  balance: Balance,
});

export default reducers;
