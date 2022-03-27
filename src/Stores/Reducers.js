import { combineReducers } from "redux";
import balanceReducer from "./Reducer/BalanceReducer";
import { createStore } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

const Reducers = combineReducers({
  balance: balanceReducer,
});

const stores = createStore(Reducers, {}, applyMiddleware(thunk));

export default stores;
