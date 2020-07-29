import React from "react";
import ResourcesList from "./ResourcesList";
import { Container } from "react-bootstrap";

export default function ResourceCategoriesList(props) {
  let { categories } = props;
  //   console.log(categories);

  return (
    <div>
      {categories.map((category) => (
        <div>
          <Container fluid="true">
            <h3 className="resource-category-name">
              <strong>{category.name}</strong>
            </h3>
            <ResourcesList key={category.id} details={category} />
          </Container>
        </div>
      ))}
    </div>
  );
}
