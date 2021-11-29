import api from "../../../api";
import {
  GET_ALL_POSTS_BEGIN,
  GET_ALL_POSTS_SUCCESS,
  GET_ALL_POSTS_FAILURE,
} from "../constants/allPostsConstants";

import { postsUrl } from "../../../api/urls";

const getAllPostsBegin = () => ({
  type: GET_ALL_POSTS_BEGIN,
});

const getAllPostsSuccess = (payload) => ({
  type: GET_ALL_POSTS_SUCCESS,
  payload,
});

const getAllPostsFailure = (payload) => ({
  type: GET_ALL_POSTS_FAILURE,
  payload,
});

const getAllPostsAction = (perPage, page) => (dispatch) => {
  //fetch begin
  dispatch(getAllPostsBegin());
  api()
    .get(`${postsUrl}?perPage=${perPage}&page=${page}`)
    //fetch success
    .then((response) => dispatch(getAllPostsSuccess(response.data.posts)))
    //fetch failure
    .catch((error) => dispatch(getAllPostsFailure(error)));
};

export { getAllPostsAction };
