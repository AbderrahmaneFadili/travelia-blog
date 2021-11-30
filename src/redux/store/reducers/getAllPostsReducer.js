import {
  GET_ALL_POSTS_BEGIN,
  GET_ALL_POSTS_SUCCESS,
  GET_ALL_POSTS_FAILURE,
  SEARCH_POSTS_BEGIN,
  SEARCH_POSTS_FAILURE,
  SEARCH_POSTS_SUCCESS,
} from "../constants/allPostsConstants";

const initialState = {
  loading: false,
  posts: null,
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SEARCH_POSTS_BEGIN:
      return {
        ...state,
        loading: true,
        posts: null,
        error: null,
      };
    case SEARCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: payload,
        error: null,
      };
    case SEARCH_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        posts: null,
        error: payload,
      };
    case GET_ALL_POSTS_BEGIN:
      return { ...state, loading: true, posts: null, error: null };
    case GET_ALL_POSTS_SUCCESS:
      return { ...state, loading: false, posts: payload, error: null };
    case GET_ALL_POSTS_FAILURE:
      return { ...state, loading: false, posts: null, error: payload };
    default:
      return state;
  }
};
