import React from "react";
import Reply from "../Reply/Reply";

function Replies() {
  return (
    <>
      <input type="text" placeholder="Add reply..." id="reply" />
      <ul>
        <Reply />
      </ul>
    </>
  );
}

export default Replies;
