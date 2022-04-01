import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import balanceReducer from "./Reducers/TodoReducers";

const Reducers = combineReducers({
  balance: balanceReducer,
});

const store = createStore(Reducers, {}, applyMiddleware(thunk));

export default store;
