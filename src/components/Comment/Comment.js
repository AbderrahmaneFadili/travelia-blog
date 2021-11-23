import React from "react";
import Replies from "../Replies/Replies";
import { Link } from "react-router-dom";
import { BiReply } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
function Comment() {
  return (
    <li className="my-7">
      <div>
        {/* User name */}
        <Link to="user/" className="text-xl hover:underline">
          Username
        </Link>
        {/* Comment body */}
        <p className="text-lg text-gray-600 mb-3 mt-1">Lorem, ipsum dolor.</p>
        {/* Reply & Delete Buttons */}
        <div className="flex w-14 justify-between items-center">
          <BiReply className="text-3xl cursor-pointer" />
          <RiDeleteBin6Line className="text-2xl cursor-pointer text-red-800" />
        </div>
      </div>
      {/* Replies */}
      <Replies />
    </li>
  );
}

export default Comment;
