import React from "react";
import SchoolBasicInfo from "../components/SchoolBasicInfo";
import SchoolData from "../components/SchoolData";
import AddSchoolToCategory from "../components/AddSchoolToCategory";

export default class IndividualSchoolContainer extends React.Component {
  state = {
    school: null,
  };

  componentDidMount() {
    fetch(
      `http://localhost:3000/api/v1/schools/${this.props.match.params.id}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          school: data,
        })
      );
  }
  render() {
    console.log(this.state.school);
    return (
      <div>
        {this.state.school === null ? (
          <h1>Loading...</h1>
        ) : (
          <div>
            <SchoolBasicInfo school={this.state.school} />
            <AddSchoolToCategory school={this.state.school} />
            <SchoolData school={this.state.school} />
          </div>
        )}
      </div>
    );
  }
}
