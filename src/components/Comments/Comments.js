import React from "react";
import Comment from "../Comment/Comment";
import Input from "../Input/Input";
function Comments() {
  return (
    <>
      <div className="max-w-screen-md mx-auto">
        <Input placeholder="Add comment..." />
        <ul>
          <Comment />
        </ul>
      </div>
    </>
  );
}

export default Comments;
