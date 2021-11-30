import {
  GET_ALL_CATEGORIES_BEGIN,
  GET_ALL_CATEGORIES_SUCCESS,
  GET_ALL_CATEGORIES_FAILURE,
} from "../constants/allCategoriesConstants";

const initialState = {
  loading: false,
  categories: null,
  error: null,
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case GET_ALL_CATEGORIES_BEGIN:
      return { ...state, loading: true, categories: null, error: null };
    case GET_ALL_CATEGORIES_SUCCESS:
      return { ...state, loading: false, categories: payload, error: null };
    case GET_ALL_CATEGORIES_FAILURE:
      return { ...state, loading: false, categories: null, error: payload };
    default:
      return state;
  }
}
