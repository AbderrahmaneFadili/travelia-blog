import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <div className="py-12">
        <div className="mx-auto w-96">
          <input
            onChange={this.props.onChange}
            value={this.props.searchValue}
            type="text"
            name="search"
            id="search"
            placeholder="Search posts..."
            className="py-2 pl-2 w-80 text-2xl
             outline-none placeholder-black border-b-2 border-gray-900"
          />
        </div>
      </div>
    );
  }
}

export default Search;
