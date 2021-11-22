import React, { Component } from "react";
import TitleWrapper from "../components/TitleWrapper/TitleWrapper";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    const { categories } = this.state;
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
        {/* Blog Posts  */}
      </>
    );
  }
}
export default Home;
