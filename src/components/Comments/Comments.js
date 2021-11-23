import React from "react";
import Comment from "../Comment/Comment";
function Comments() {
  return (
    <>
      <input type="text" placeholder="Add comment..." id="comment" />
      <ul>
        <Comment />
      </ul>
    </>
  );
}

export default Comments;
