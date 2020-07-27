import React from "react";
import UserInfo from "../components/UserInfo";
// import UserCategoriesContainer from "./UserCategoriesContainer";

export default class HomeContainer extends React.Component {
  state = {
    user: null,
    categories: [],
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
        });
      });
  };

  addCategory = (newCategory) => {
    this.setState({
      categories: [...this.state.categories, newCategory],
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
          </div>
        )}
      </div>
    );
  }
}
