import axios from "axios";

function api() {
  return {
    //post request
    post: (url, body, token = null) => {
      return axios.post(url, body, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
    },
    //delete request
    delete: (url, token = null) => {
      return fetch(url, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
    },
    //put request
    put: (url, body, token = null) => {
      return fetch(url, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      });
    },
    //get request
    get: (url, token = null) => {
      return fetch(url, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
    },
  };
}

export default api;
