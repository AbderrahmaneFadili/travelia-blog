import api from "../../../api";
import {
  GET_CURRENT_USER_BEGIN,
  GET_CURRENT_USER_FAILURE,
  GET_CURRENT_USER_SUCCESS,
  RESET_CURRENT_USER_STATE,
} from "../constants/currentUserConstants";

function currentUserActionBegin() {
  return {
    type: GET_CURRENT_USER_BEGIN,
  };
}

function currentUserActionSuccess(payload) {
  return {
    type: GET_CURRENT_USER_SUCCESS,
    payload,
  };
}

function currentUserActionFailure(payload) {
  return {
    type: GET_CURRENT_USER_FAILURE,
    payload,
  };
}

//get current user action
const getCurrentUserAction = () => (dispatch) => {
  //begin
  dispatch(currentUserActionBegin());
  if (localStorage.getItem("user-data")) {
    const userData = JSON.parse(localStorage.getItem("user-data"));
    //success
    dispatch(currentUserActionSuccess(userData));
  } else {
    //failure
    dispatch(currentUserActionFailure("Error:no user found"));
  }
};

//reset state
const resetCurrentUserState = () => {
  return {
    type: RESET_CURRENT_USER_STATE,
  };
};

export { getCurrentUserAction, resetCurrentUserState };
