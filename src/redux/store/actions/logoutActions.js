import api from "../../../api";
import { logoutUrl } from "../../../api/urls";

import {
  LOGOUT_USER_BEGIN,
  LOGOUT_USER_FAILURE,
  LOGOUT_USER_SUCCESS,
} from "../constants/logoutConstants";

//logout Begin
function logoutActionBegin() {
  return {
    type: LOGOUT_USER_BEGIN,
  };
}

//logout Success
function logoutActionSuccess(payload) {
  return {
    type: LOGOUT_USER_SUCCESS,
    payload,
  };
}

//logout Failure
function logoutActionFailure(payload) {
  return {
    type: LOGOUT_USER_FAILURE,
    payload,
  };
}

//login action
function logoutAction(user) {
  return (dispatch) => {
    dispatch(logoutActionBegin());

    const userData = JSON.parse(localStorage.getItem("user-data"));

    api()
      .post(logoutUrl, user, userData.token)
      .then((data) => {
        localStorage.clear();
        dispatch(logoutActionSuccess(data.data));
      })
      .catch((error) => {
        dispatch(logoutActionFailure(error.response.data));
      });
  };
}

export default logoutAction;
