import React from "react";
import Input from "../Input/Input";
import Reply from "../Reply/Reply";

function Replies() {
  return (
    <>
      <div className="ml-10">
        <Input placeholder="Add Reply..." />
        <ul>
          <Reply />
          <Reply />
          <Reply />
        </ul>
      </div>
    </>
  );
}

export default Replies;
