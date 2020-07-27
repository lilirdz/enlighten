import React from "react";
import UserInfo from "../components/UserInfo";
import UserCategoriesContainer from "./UserCategoriesContainer";

export default class ProfileContainer extends React.Component {
  state = {
    user: null,
    categories: [],
    schools: [],
  };

  componentDidMount() {
    this.fetchUser();
  }

  fetchUser = () => {
    fetch(`http://localhost:3000/api/v1/users/${localStorage.user_id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((res) => res.json())
      .then((user) => {
        this.setState({
          user: user.user,
          categories: user.categories,
          schools: user.schools,
        });
      });
  };

  removeSchool = (schoolId, categoryId) => {
    let categoryToUpdate = this.state.categories.find(
      (category) => category.id === categoryId
    );

    console.log(categoryToUpdate);

    let updatedSchools = this.state.schools.filter(
      (schoolObj) => schoolObj.id !== parseInt(schoolId)
    );

    this.setState({
      schools: updatedSchools,
    });
  };

  addCategory = (newCategory) => {
    this.setState({
      categories: [...this.state.categories, newCategory],
    });
  };

  removeCategory = (categoryId) => {
    this.setState({
      categories: this.state.categories.filter(
        (category) => category.id !== parseInt(categoryId)
      ),
    });
  };

  render() {
    return (
      <div>
        {this.state.categories === null ? (
          <div>
            <UserInfo
              details={this.state.user}
              addCategory={this.addCategory}
              routeProps={this.props}
            />
          </div>
        ) : (
          <div>
            <UserInfo
              details={this.state.user}
              addCategory={this.addCategory}
              routeProps={this.props}
            />

            <UserCategoriesContainer
              data={this.state}
              removeSchool={this.removeSchool}
              removeCategory={this.removeCategory}
              routeProps={this.props}
            />
          </div>
        )}
      </div>
    );
  }
}
