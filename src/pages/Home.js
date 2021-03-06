import React, { Component } from "react";
import { connect } from "react-redux";
import PostCard from "../components/PostCard/PostCard";
import Search from "../components/Search/Search";
import TitleWrapper from "../components/TitleWrapper/TitleWrapper";
import {
  getAllPostsAction,
  searchPostsAction,
} from "../redux/store/actions/allPostsActions";
import { getAllCategoriesAction } from "../redux/store/actions/allCategoriesActions";
import { MDBSpinner } from "mdb-react-ui-kit";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeLinkStyle: "bg-gray-900 text-white",
      searchValue: "",
    };
  }

  componentDidMount() {
    this.props.getAllPosts(4, 1);
    this.props.getAllCategories();
  }

  //handle pagination link click
  handleLinkClick = (index) => {
    if (this.state.searchValue !== "") {
      this.props.searchPosts(4, index, this.state.searchValue);
    } else {
      this.props.getAllPosts(4, index);
    }
  };

  handleSearchValueChange = (event) => {
    this.setState(
      {
        searchValue: event.target.value,
      },
      () => this.props.searchPosts(4, 1, this.state.searchValue),
    );
  };

  render() {
    console.log(this.props);
    const { activeLinkStyle } = this.state;

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
            {this.props.categories &&
              this.props.categories.map((category, i) => (
                <li key={i.toString()}>
                  <button className="cursor-pointer text-xl">
                    {category.title}
                  </button>
                </li>
              ))}
          </ul>
        </TitleWrapper>
        {/* Search */}
        <Search
          searchValue={this.state.searchValue}
          onChange={this.handleSearchValueChange}
        />
        {/* Blog Posts  */}
        {/* loading */}
        {this.props.loading && (
          <div className="flex items-center justify-center h-screen">
            <MDBSpinner />
          </div>
        )}
        {/* Posts */}
        <div className="grid grid-cols-2 gap-6 mb-6 max-w-screen-md mx-auto">
          {this.props.posts &&
            this.props.posts.data.map((post, i) => {
              return (
                <PostCard
                  key={i.toString()}
                  postTitle={post.title}
                  postImage={post.image_path}
                />
              );
            })}
        </div>
        <div className="mt-14 max-w-screen-lg mx-auto mb-8">
          <div className="flex justify-between">
            <div className="text-xl font-extralight">
              Showing{" "}
              <span className="font-normal">
                {this.props.posts &&
                  this.props.posts.data.length * this.props.posts.current_page}
              </span>{" "}
              of{" "}
              <span className="font-normal">
                {this.props.posts && this.props.posts.total}
              </span>
            </div>

            {/* links */}
            <div className="flex text-xl border">
              {this.props.posts &&
                this.props.posts.links.map((link, i) => {
                  return (
                    <a
                      key={i.toString()}
                      onClick={() =>
                        this.handleLinkClick(link.url && link.url.slice(-1))
                      }
                      href="#"
                      className={`py-3 px-4 border-l border-r ${
                        link.active && activeLinkStyle
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

function mapStateToProps({ getAllPostsReducer, getAllCategoriesReducer }) {
  return {
    loading: getAllPostsReducer.loading,
    posts: getAllPostsReducer.posts,
    error: getAllPostsReducer.error,
    categories: getAllCategoriesReducer.categories,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAllPosts: (perPage, page) => dispatch(getAllPostsAction(perPage, page)),
    getAllCategories: () => dispatch(getAllCategoriesAction()),
    searchPosts: (perPage, page, search) =>
      dispatch(searchPostsAction(perPage, page, search)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
