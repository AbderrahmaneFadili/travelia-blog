import {
  LOGIN_USER_BEGIN,
  LOGIN_USER_FAILURE,
  LOGIN_USER_SUCCESS,
} from "../constants/loginConstants";

const initialState = {
  loading: false,
  user: null,
  error: {},
};

const loginReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_USER_BEGIN:
      return { ...state, user: null, loading: true, error: {} };
    case LOGIN_USER_SUCCESS:
      return { ...state, user: payload, loading: false, error: {} };
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        user: null,
        loading: false,
        error: {
          errors: payload.errors && payload.errors,
          message: payload.message && payload.message,
        },
      };
    default:
      return state;
  }
};

export default loginReducer;
