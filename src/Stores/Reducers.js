import { combineReducers } from "redux";
import userReducers from "./Reducers/userReducers";

const reducers = combineReducers({
  userManagements: userReducers,
});

export default reducers;
