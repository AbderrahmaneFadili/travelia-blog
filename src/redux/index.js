import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import {
  registerReducer,
  loginReducer,
  logoutReducer,
  currentUserReducer,
} from "./store";

//create the stroe with root reducer
const rootStore = createStore(
  combineReducers({
    registerReducer,
    loginReducer,
    logoutReducer,
    currentUserReducer,
  }),
  applyMiddleware(thunk),
);

export default rootStore;
