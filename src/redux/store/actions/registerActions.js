import {
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  REGISTER_USER_BEGIN,
} from "../constants/registerConstants";

//api
import api from "../../../api";
//register url
import register from "../actions";

//Register Begin
function registerActionBegin() {
  return {
    type: REGISTER_USER_BEGIN,
  };
}

//Register Success
function registerActionSuccess(payload) {
  return {
    type: REGISTER_USER_SUCCESS,
    payload,
  };
}

//Register Failure
function registerActionFailure(payload) {
  return {
    type: REGISTER_USER_FAILURE,
    payload,
  };
}

//Register Action
function registerAction(user) {
  return (dispatch) => {
    dispatch(registerActionBegin());
    api()
      .post(register, user)
      .then((response) => response.json())
      .then((data) => dispatch(registerActionSuccess(data)))
      .catch((error) => dispatch(registerActionFailure(error)));
  };
}

export { registerAction };
