import React from "react";

export default function CompareSchools() {
  return (
    <div>
      <div
        class="collegeai collegeai-session-data"
        data-api-key={process.env.REACT_APP_API_KEY}
      ></div>
      <div
        class="collegeai-compare-college-view"
        data-college-unit-ids="243744,190415"
        style={{ fontFamily: "Poppins" }}
      ></div>
    </div>
  );
}
