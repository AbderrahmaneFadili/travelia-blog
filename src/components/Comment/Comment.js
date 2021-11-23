import React from "react";
import Replies from "../Replies/Replies";

function Comment() {
  return (
    <li>
      Comment
      {/* Replies */}
      <Replies />
    </li>
  );
}

export default Comment;
