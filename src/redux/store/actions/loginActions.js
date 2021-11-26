import {
  LOGIN_USER_BEGIN,
  LOGIN_USER_FAILURE,
  LOGIN_USER_SUCCESS,
} from "../constants/loginConstants";
//api
import api from "../../../api";
import { loginUrl } from "../../../api/urls";

//login Begin
function loginActionBegin() {
  return {
    type: LOGIN_USER_BEGIN,
  };
}

//login Success
function loginActionSuccess(payload) {
  return {
    type: LOGIN_USER_SUCCESS,
    payload,
  };
}

//login Failure
function loginActionFailure(payload) {
  return {
    type: LOGIN_USER_FAILURE,
    payload,
  };
}

//login action
function loginAction(user) {
  return (dispatch) => {
    dispatch(loginActionBegin());
    api()
      .post(loginUrl, user)
      .then((data) => {
        localStorage.setItem("user-data", JSON.stringify(data.data));
        dispatch(loginActionSuccess(data.data));
      })
      .catch((error) => {
        dispatch(loginActionFailure(error.response.data));
      });
  };
}

export default loginAction;
