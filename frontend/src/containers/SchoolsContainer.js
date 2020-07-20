import React from "react";
import SchoolList from "../components/SchoolList.js";
import SearchContainer from "../containers/SearchContainer.js";

export default class SchoolsContainer extends React.Component {
  state = {
    schools: [],
    search: "",
  };

  componentDidMount() {
    this.fetchSchools();
  }

  fetchSchools = () => {
    fetch("http://localhost:3000/api/v1/schools", {
      method: "GET",
      headers: { Authorization: `Bearer ${localStorage.token}` },
    })
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          schools: data,
        })
      );
  };

  handleSearch = (e) => {
    this.setState({
      ...this.state,
      search: e.target.value,
    });
  };

  render() {
    const searchSchools = this.state.schools.filter((school) =>
      school.name.toLowerCase().includes(this.state.search.toLowerCase())
    );

    return (
      <div>
        <SearchContainer handleSearch={this.handleSearch} />
        <SchoolList schools={searchSchools} />
      </div>
    );
  }
}
