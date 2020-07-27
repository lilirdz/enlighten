import React from "react";
import SchoolList from "../components/SchoolList.js";
import SearchContainer from "../containers/SearchContainer.js";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Container } from "react-bootstrap";
// import Pagination from "../components/Pagination.js";

const style = {
  color: "#9FA0FF",
  marginTop: 300,
};

export default class SchoolsContainer extends React.Component {
  state = {
    schools: [],
    search: "",
    loading: true,
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
          loading: false,
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
        <h2>Explore Colleges and Universities Across the U.S.</h2>
        <SearchContainer handleSearch={this.handleSearch} />
        {this.state.loading ? (
          <CircularProgress style={style} />
        ) : (
          <Container>
            <SchoolList schools={searchSchools} routeProps={this.props} />
          </Container>
        )}
      </div>
    );
  }
}
