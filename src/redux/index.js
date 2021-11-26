import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { registerReducer, loginReducer } from "./store";

//create the stroe with root reducer
const rootStore = createStore(
  combineReducers({
    registerReducer,
    loginReducer,
  }),
  applyMiddleware(thunk),
);

export default rootStore;
