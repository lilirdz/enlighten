import React from "react";
import Card from "react-bootstrap/Card";

export default class ResourceCard extends React.Component {
  render() {
    const { resource } = this.props;
    return (
      <div>
        <Card className="resource-card">
          <Card.Body>
            <Card.Text className="resource-name">{resource.name}</Card.Text>

            <Card.Text>{resource.about_snippet}</Card.Text>
            <Card.Link
              rel="noopener noreferrer"
              target="_blank"
              href={resource.organization_url}
              className="resource-link"
            >
              Learn More
            </Card.Link>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
