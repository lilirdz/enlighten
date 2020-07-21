import React from "react";

export default class SchoolDemographics extends React.Component {
  state = {
    demographics: [
      this.props.schoolYear.demographics_hispanic,
      this.props.schoolYear.demographics_asian,
      this.props.schoolYear.demographics_black,
      this.props.schoolYear.demographics_nhpi,
      this.props.schoolYear.demographics_white,
    ],
  };

  render() {
    // console.log(this.props);
    // console.log(this.state);

    return (
      <div>
        <p>
          Demographic Rate {this.props.schoolYear.year}: Hispanic:{" "}
          {this.state.demographics[0]}, Asian: {this.state.demographics[1]},
          Black: {this.state.demographics[2]}, Native Hawaiian Pacific Islander:{" "}
          {this.state.demographics[3]}, White: {this.state.demographics[4]}
        </p>
      </div>
    );
  }
}
