import React, { Component } from "react";
import PostCard from "../components/PostCard/PostCard";
import Search from "../components/Search/Search";
import TitleWrapper from "../components/TitleWrapper/TitleWrapper";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeLinkStyle: "bg-gray-900 text-white",
      categories: [
        {
          id: 1,
          title: "Air travel",
        },
        {
          id: 2,
          title: "Bleisure travel",
        },
        {
          id: 3,
          title: "Honeymoon",
        },
      ],
    };
  }

  render() {
    const { categories, activeLinkStyle } = this.state;
    return (
      <>
        {/* Title Wrapper */}
        <TitleWrapper>
          <h1 className="text-8xl text-center font-light">
            Welcome to Travelia
          </h1>

          <h3 className="font-extralight text-2xl text-gray-400 my-8 text-center">
            Blog Categories
          </h3>
          <ul className="flex w-72 justify-between mx-auto">
            {categories.map((c) => (
              <li key={c.id}>
                <button className="cursor-pointer text-xl">{c.title}</button>
              </li>
            ))}
          </ul>
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
                className={`py-3 px-4 border-l border-r ${activeLinkStyle}`}
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
      </>
    );
  }
}
export default Home;
