import React from "react";
import ResourcesList from "./ResourcesList";

export default function ResourceCategoriesList(props) {
  let { categories } = props;
  //   console.log(categories);

  return (
    <div>
      {categories.map((category) => (
        <div>
          <h3>{category.name}</h3>
          <ResourcesList key={category.id} details={category} />
        </div>
      ))}
    </div>
  );
}
