import React from "react";
import SchoolDemographics from "../components/SchoolDemographics";
import SchoolStats from "./SchoolStats";

export default class SchoolData extends React.Component {
  render() {
    console.log(this.props.school.school_years);

    return (
      <div>
        {this.props.school.school_years.map((schoolYear) => (
          <div>
            <h3>{schoolYear.year}</h3>
            <SchoolDemographics schoolYear={schoolYear} />
            <SchoolStats schoolYear={schoolYear} />
          </div>
        ))}
      </div>
    );
  }
}
