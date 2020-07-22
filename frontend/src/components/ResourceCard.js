import React from "react";
import Card from "react-bootstrap/Card";

export default class ResourceCard extends React.Component {
  render() {
    const { resource } = this.props;
    return (
      <div>
        <Card>
          <Card.Body>
            <Card.Title>{resource.name}</Card.Title>
            <Card.Text>{resource.about_snippet}</Card.Text>
            <Card.Link
              rel="noopener noreferrer"
              target="_blank"
              href={resource.organization_url}
            >
              Learn More
            </Card.Link>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
