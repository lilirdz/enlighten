import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

export default function SchoolBasicInfo(props) {
  const { school } = props;
  console.log(school.school_url);
  return (
    <div>
      <Jumbotron className="school-details">
        <h1>{school.name}</h1>
        <h4>
          {school.city}, {school.state}
        </h4>
        <h4>
          For more info visit:
          {school.school_url}
        </h4>
      </Jumbotron>
    </div>
  );
}
