import { applyMiddleware, createStore } from "redux";
import Reducers from "./Reducers";
import thunk from "redux-thunk";

export const stores = createStore(Reducers, {}, applyMiddleware(thunk));
