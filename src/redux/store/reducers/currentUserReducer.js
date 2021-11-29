import {
  GET_CURRENT_USER_BEGIN,
  GET_CURRENT_USER_SUCCESS,
  GET_CURRENT_USER_FAILURE,
  RESET_CURRENT_USER_STATE,
} from "../constants/currentUserConstants";

const initialState = {
  loading: false,
  currentUser: null,
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    //begin
    case GET_CURRENT_USER_BEGIN:
      return { ...state, loading: false, currentUser: null, error: null };
    //success
    case GET_CURRENT_USER_SUCCESS:
      return { ...state, loading: false, currentUser: payload, error: null };
    //failure
    case GET_CURRENT_USER_FAILURE:
      return {
        ...state,
        loading: false,
        currentUser: null,
        error: payload,
      };
    //reset
    case RESET_CURRENT_USER_STATE:
      return {
        ...state,
        loading: false,
        currentUser: null,
        error: null,
      };
    default:
      return state;
  }
};
