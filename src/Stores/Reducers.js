import { combineReducers } from "redux";
import accountReducer from "./Reducers/accountReducer";

const reducers = combineReducers({
  accountBalance: accountReducer,
});

export default reducers;
