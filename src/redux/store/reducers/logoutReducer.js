import {
  LOGOUT_USER_BEGIN,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILURE,
} from "../constants/logoutConstants";

const initialState = {
  loading: false,
  message: null,
  error: null,
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case LOGOUT_USER_BEGIN:
      return { ...state, message: null, loading: true, error: {} };
    case LOGOUT_USER_SUCCESS:
      return { ...state, message: payload, loading: false, error: {} };
    case LOGOUT_USER_FAILURE:
      return { ...state, message: null, loading: false, error: payload };
    default:
      return state;
  }
}
