import React, { useState } from "react";
import { Link } from "react-router-dom";
import PostCard from "../components/PostCard/PostCard";
import Search from "../components/Search/Search";
import TitleWrapper from "../components/TitleWrapper/TitleWrapper";
import ModalMessage from "../components/Modal/ModalMessage";
import { Component } from "react";
import { Navigate } from "react-router-dom";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      activeLinkStyle: "bg-gray-800 text-white",
    };
  }

  openModal = () => {
    this.setState({
      modalIsOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      modalIsOpen: false,
    });
  };

  render() {
    return (
      <>
        {/* Title Wrapper */}
        <TitleWrapper>
          {/* Title */}
          <h1 className="text-6xl text-center font-light">User name</h1>
          {/* Create post */}
          <div className="mt-10 font-light text-xl mr-3 hover:underline text-center">
            <Link to="/create/post">Create new Post</Link>
          </div>
          {/* links */}
          <div className="absolute bottom-7 right-7">
            <div className="self-end">
              <Link
                to="/edit/user/1"
                className="font-light text-xl mr-3 hover:underline"
              >
                Edit profile
              </Link>
              <button
                onClick={this.openModal}
                className="font-light text-xl hover:underline"
              >
                Delete account
              </button>
            </div>
          </div>
        </TitleWrapper>
        {/* Search */}
        <Search />
        {/* Blog Posts  */}
        <div className="grid grid-cols-2 gap-6 mb-6 max-w-screen-md mx-auto">
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
        <div className="mt-14 max-w-screen-lg mx-auto mb-8">
          <div className="flex justify-between">
            <div className="text-xl font-extralight">
              Showing <span className="font-normal">10</span> of
              <span className="font-normal"> 30</span>
            </div>

            <div className="flex text-xl border">
              <a href="/" className={`py-3 px-4 border-l border-r`}>
                {"<"}
              </a>
              <a
                href="/"
                className={`py-3 px-4 border-l border-r ${this.state.activeLinkStyle}`}
              >
                1
              </a>
              <a href="/" className={`py-3 px-4 border-l border-r`}>
                2
              </a>
              <a href="/" className={`py-3 px-4 border-l border-r`}>
                3
              </a>
              <a href="/" className={`py-3 px-4 border-l border-r`}>
                4
              </a>
              <a href="/" className={`py-3 px-4 border-l border-r`}>
                {">"}
              </a>
            </div>
          </div>
        </div>
        {/* Modal */}
        <ModalMessage
          modalIsOpen={this.state.modalIsOpen}
          closeModal={this.closeModal}
        />
      </>
    );
  }
}

export default UserProfile;
