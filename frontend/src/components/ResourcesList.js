import React from "react";
import ResourceCard from "../components/ResourceCard.js";

export default function ResourcesList(props) {
  let { details } = props;
  console.log(details);

  return (
    <div>
      {details.resources.map((resource) => (
        <div>
          <ResourceCard key={resource.id} resource={resource} />
        </div>
      ))}
    </div>
  );
}
