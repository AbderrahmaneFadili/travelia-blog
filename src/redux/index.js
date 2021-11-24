import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./store";

//create the stroe with root reducer
const rootStore = createStore(
  combineReducers(rootReducer),
  applyMiddleware(thunk),
);

export default rootStore;
