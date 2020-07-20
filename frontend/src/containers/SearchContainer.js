import React from "react";

export default class SearchContainer extends React.Component {
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Search by School Name"
          onChange={this.props.handleSearch}
        />
      </div>
    );
  }
}
