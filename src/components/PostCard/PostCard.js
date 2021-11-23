import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { GrEdit } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri";

function PostCard() {
  const card = {
    image:
      "https://images.pexels.com/photos/848573/pexels-photo-848573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    title: "This is the title !!.",
  };

  return (
    <div className={`rounded-md shadow-md pb-2`}>
      {/* post image */}
      <img
        src={card.image}
        alt="post"
        className="h-5/6 w-full object-cover rounded-md rounded-b-none"
      />
      <div className="flex items-center  pl-3 pt-2">
        {/* like & comment */}
        <div className="flex items-center">
          {/*  like */}
          <AiOutlineHeart className="mr-5 cursor-pointer text-3xl" />
          {/* comment */}
          <FaRegComment className="cursor-pointer text-2xl" />
        </div>
        {/* edit & delete */}
        <div className="flex items-center ml-auto mr-6">
          {/*  Edit */}
          <GrEdit className="mr-5 cursor-pointer text-2xl" />
          {/* delete */}
          <RiDeleteBin6Line className="cursor-pointer text-2xl text-red-800" />
        </div>
      </div>

      {/* post title */}
      <h3 className="text-2xl leading-7 pl-3 pt-1 pb-1">
        <a href="/">{card.title}</a>
      </h3>
    </div>
  );
}

export default PostCard;
