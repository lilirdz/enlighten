import React from "react";

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
    console.log(this.state);
    return (
      <div>
        <h1>{this.state.school.name}</h1>
      </div>
    );
  }
}
