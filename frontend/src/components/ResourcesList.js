import React from "react";
import ResourceCard from "../components/ResourceCard.js";
import { Row, Col } from "react-bootstrap";

export default function ResourcesList(props) {
  let { details } = props;

  return (
    <div>
      <Row>
        {details.resources.map((resource) => (
          <div>
            <Col>
              <ResourceCard key={resource.id} resource={resource} />
            </Col>
          </div>
        ))}
      </Row>
    </div>
  );
}
