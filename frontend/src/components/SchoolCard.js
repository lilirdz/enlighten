import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Link from "react-router-dom/Link";

import Col from "react-bootstrap/Col";
import university2 from "../images/university2.png";

export default class SchoolCard extends React.Component {
  render() {
    const { school } = this.props;
    return (
      <div>
        <Col>
          <Col>
            <Col>
              <Col>
                <Card className="school-card">
                  <Card.Img variant="top" src={university2} height="200px" />
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
              </Col>
            </Col>
          </Col>
        </Col>
      </div>
    );
  }
}
