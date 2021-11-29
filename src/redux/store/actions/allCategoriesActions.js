import api from "../../../api";
import { categoriesUrl } from "../../../api/urls";
import {
  GET_ALL_CATEGORIES_BEGIN,
  GET_ALL_CATEGORIES_SUCCESS,
  GET_ALL_CATEGORIES_FAILURE,
} from "../constants/allCategoriesConstants";

const getCategoriesBegin = () => ({
  type: GET_ALL_CATEGORIES_BEGIN,
});

const getCategoriesSuccess = (payload) => ({
  type: GET_ALL_CATEGORIES_SUCCESS,
  payload,
});

const getCategoriesFailure = (payload) => ({
  type: GET_ALL_CATEGORIES_FAILURE,
  payload,
});

const getAllCategoriesAction = () => (dispatch) => {
  dispatch(getCategoriesBegin());
  api()
    .get(categoriesUrl)
    .then((response) => dispatch(getCategoriesSuccess(response.data)))
    .catch((error) => dispatch(getCategoriesFailure(error)));
};

export { getAllCategoriesAction };
