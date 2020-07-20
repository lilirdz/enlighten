import React from "react";
import SchoolCard from "../components/SchoolCard.js";

export default class SchoolList extends React.Component {
  render() {
    let { schools } = this.props;
    schools = schools.slice(0, 30);
    return (
      <div>
        {schools.map((school) => (
          <SchoolCard key={school.id} school={school} />
        ))}
      </div>
    );
  }
}
