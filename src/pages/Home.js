import React, { Component } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router";
import PostCard from "../components/PostCard/PostCard";
import Search from "../components/Search/Search";
import TitleWrapper from "../components/TitleWrapper/TitleWrapper";
import { getAllPostsAction } from "../redux/store/actions/allPostsActions";
import { MDBSpinner } from "mdb-react-ui-kit";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeLinkStyle: "bg-gray-900 text-white",
      currentUserData: null,
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

  componentDidMount() {
    this.props.getAllPosts(4, 1);
  }

  handleLinkClick = (index) => {
    this.props.getAllPosts(4, index);
  };

  render() {
    console.log(this.props);
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
        {this.props.loading && (
          <div className="flex items-center justify-center h-screen">
            <MDBSpinner />
          </div>
        )}
        <div className="grid grid-cols-2 gap-6 mb-6 max-w-screen-md mx-auto">
          {this.props.posts &&
            this.props.posts.data.map((post, i) => {
              return (
                <PostCard postTitle={post.title} postImage={post.image_path} />
              );
            })}
        </div>
        <div className="mt-14 max-w-screen-lg mx-auto mb-8">
          <div className="flex justify-between">
            <div className="text-xl font-extralight">
              Showing{" "}
              <span className="font-normal">
                {this.props.posts && this.props.posts.data.length}
              </span>{" "}
              of{" "}
              <span className="font-normal">
                {this.props.posts && this.props.posts.total}
              </span>
            </div>

            <div className="flex text-xl border">
              {this.props.posts &&
                this.props.posts.links.map((link, i) => {
                  return (
                    <a
                      onClick={() =>
                        this.handleLinkClick(link.url && link.url.slice(-1))
                      }
                      href="#"
                      className={`py-3 px-4 border-l border-r ${
                        link.active && this.state.activeLinkStyle
                      }`}
                    >
                      {i === 0
                        ? "<"
                        : i === this.props.posts.links.length - 1
                        ? ">"
                        : link.label}
                    </a>
                  );
                })}
            </div>
          </div>
        </div>
      </>
    );
  }
}

function mapStateToProps({ getAllPostsReducer }) {
  return {
    loading: getAllPostsReducer.loading,
    posts: getAllPostsReducer.posts,
    error: getAllPostsReducer.error,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAllPosts: (perPage, page) => dispatch(getAllPostsAction(perPage, page)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
