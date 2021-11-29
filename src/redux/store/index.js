import registerReducer from "./reducers/registerReducer";
import loginReducer from "./reducers/loginReducer";
import logoutReducer from "./reducers/logoutReducer";
import currentUserReducer from "./reducers/currentUserReducer";
import getAllPostsReducer from "./reducers/getAllPostsReducer";
import getAllCategoriesReducer from "./reducers/getAllCategoriesReducer";

//export all reducer into rootReducer
export {
  registerReducer,
  loginReducer,
  logoutReducer,
  currentUserReducer,
  getAllPostsReducer,
  getAllCategoriesReducer,
};
