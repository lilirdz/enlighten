import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

export default function SchoolBasicInfo(props) {
  const { school } = props;

  return (
    <div>
      <Jumbotron className="school-details">
        <div className="school-text">
          <h1>
            <strong>{school.name}</strong>
          </h1>
          <h4>
            {school.city}, {school.state}
          </h4>
          <h4>
            For more info visit:{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={
                school.school_url.includes("https://")
                  ? school.school_url
                  : "https://" + school.school_url
              }
              className="school-url-link"
            >
              {school.school_url}
            </a>
          </h4>
        </div>
      </Jumbotron>
    </div>
  );
}
