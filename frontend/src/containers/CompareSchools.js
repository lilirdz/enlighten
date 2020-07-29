import React from "react";
import { Jumbotron } from "react-bootstrap";

export default function CompareSchools() {
  return (
    <div>
      <Jumbotron className="compare-schools">
        <h2>Use This Table Below to Compare Schools</h2>
      </Jumbotron>
      <div
        class="collegeai collegeai-session-data"
        data-api-key={process.env.REACT_APP_API_KEY}
      ></div>
      <div
        class="collegeai-compare-college-view"
        data-college-unit-ids="243744,190415"
      ></div>
    </div>
  );
}
