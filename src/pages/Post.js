import moment from "moment";
import React, { Component } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import Comments from "../components/Comments/Comments";

class Post extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <article>
        {/* Post Image */}
        <img
          className="object-cover w-full post-image mb-4"
          src="https://images.pexels.com/photos/848573/pexels-photo-848573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="post"
        />

        <div className="max-w-screen-md mx-auto mb-10">
          {/* Post date */}
          <div className="font-light text-gray-500 mb-4">
            Written at {moment().startOf("day").fromNow()}
          </div>
          {/* Like & Comment Icons */}
          <div className="flex items-center">
            {/*  like */}
            <AiOutlineHeart className="mr-5 cursor-pointer text-3xl" />
            {/* comment */}
            <FaRegComment className="cursor-pointer text-2xl" />
          </div>
          {/* Title */}
          <h2 className="text-6xl my-7 font-bold">This is the post title</h2>
          {/* Body */}
          <p className="leading-8 text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad iure
            laudantium commodi quaerat debitis rerum incidunt, cumque voluptate
            recusandae? Delectus vel quaerat expedita optio, temporibus nulla a
            animi maxime blanditiis?{" "}
            <button className="underline">Show more</button>
          </p>
        </div>

        {/* Comments */}
        <Comments />
      </article>
    );
  }
}

export default Post;
