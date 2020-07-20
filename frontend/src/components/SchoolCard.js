import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Link from "react-router-dom/Link";

export default class SchoolCard extends React.Component {
  render() {
    const { school } = this.props;
    return (
      <div>
        <Card>
          <Card.Body>
            <Card.Title>{school.name}</Card.Title>
            <Card.Text>
              {school.city}, {school.state}
            </Card.Text>
            <Button as={Link} to={`schools/${school.id}`}>
              Learn More
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
