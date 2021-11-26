import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { registerReducer } from "./store";

//create the stroe with root reducer
const rootStore = createStore(
  combineReducers({
    registerReducer,
  }),
  applyMiddleware(thunk),
);

export default rootStore;
