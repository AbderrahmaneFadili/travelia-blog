import {
  REGISTER_USER_FAILURE,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_BEGIN,
} from "../constants/registerConstants";

const initialState = {
  user: null,
  loading: false,
  error: {},
};

const registerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER_USER_BEGIN:
      return { ...state, user: null, loading: true, error: {} };
    case REGISTER_USER_SUCCESS:
      return { ...state, user: payload, loading: false, error: {} };
    case REGISTER_USER_FAILURE:
      return { ...state, user: null, loading: false, error: payload };
    default:
      return state;
  }
};
export default registerReducer;
