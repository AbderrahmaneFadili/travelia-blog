import api from "../../../api";
import {
  GET_ALL_POSTS_BEGIN,
  GET_ALL_POSTS_SUCCESS,
  GET_ALL_POSTS_FAILURE,
  SEARCH_POSTS_BEGIN,
  SEARCH_POSTS_SUCCESS,
  SEARCH_POSTS_FAILURE,
} from "../constants/allPostsConstants";

import { postsUrl, searchPostsUrl } from "../../../api/urls";

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

const searchPostsBegin = () => ({
  type: SEARCH_POSTS_BEGIN,
});

const searchPostsSuccess = (payload) => ({
  type: SEARCH_POSTS_SUCCESS,
  payload,
});

const searchPostsFailure = (payload) => ({
  type: SEARCH_POSTS_FAILURE,
  payload,
});

//get all posts
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

//search posts
const searchPostsAction = (perPage, page, search) => (dispatch) => {
  //search begin
  dispatch(searchPostsBegin());
  api()
    .get(`${searchPostsUrl}?perPage=${perPage}&page=${page}&search=${search}`)
    //search success
    .then((response) => {
      dispatch(searchPostsSuccess(response.data.posts));
    })
    //search failure
    .catch((error) => dispatch(searchPostsFailure(error)));
};

export { getAllPostsAction, searchPostsAction };
