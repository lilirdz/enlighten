import React from "react";
import UserCategoryCard from "../components/UserCategoryCard";

export default class UserCategoriesContainer extends React.Component {
  render() {
    // console.log(this.props);
    if (this.props.data === null) return <h1>Loading</h1>;
    return (
      <div>
        {this.props.data.categories.map((category) => (
          <UserCategoryCard
            category={category}
            schools={this.props.data.schools}
            removeSchool={this.props.removeSchool}
            removeCategory={this.props.removeCategory}
          />
        ))}
      </div>
    );
  }
}
