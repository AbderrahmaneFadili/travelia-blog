import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import {
  registerReducer,
  loginReducer,
  logoutReducer,
  currentUserReducer,
  getAllPostsReducer,
  getAllCategoriesReducer,
} from "./store";

//create the stroe with root reducer
const rootStore = createStore(
  combineReducers({
    registerReducer,
    loginReducer,
    logoutReducer,
    currentUserReducer,
    getAllPostsReducer,
    getAllCategoriesReducer,
  }),
  applyMiddleware(thunk),
);

export default rootStore;
