import React from "react";
import ResourceCategoriesList from "../components/ResourceCategoriesList.js";

export default class ResourcesContainer extends React.Component {
  state = {
    resourceCategories: [],
  };

  componentDidMount() {
    this.fetchResourceCategories();
  }

  fetchResourceCategories = () => {
    fetch("http://localhost:3000/api/v1/resource_categories", {
      method: "GET",
      headers: { Authorization: `Bearer ${localStorage.token}` },
    })
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          resourceCategories: data,
        })
      );
  };
  render() {
    // console.log(this.state.resourceCategories);
    return (
      <div>
        <ResourceCategoriesList categories={this.state.resourceCategories} />
      </div>
    );
  }
}
