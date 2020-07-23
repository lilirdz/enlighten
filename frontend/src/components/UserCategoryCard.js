import React from "react";
import Card from "react-bootstrap/Card";
import UserSchoolList from "../components/UserSchoolList";

export default class UserCategoryCard extends React.Component {
  filteredSchools = () => {
    let filteredSchools = this.props.schools.filter(
      (schoolObj) => schoolObj.category === this.props.category.name
    );
    return filteredSchools;
  };

  render() {
    const { category } = this.props;
    // console.log(category);
    // console.log(category.id);

    return (
      <div>
        <Card>
          <Card.Body>
            <Card.Title>{category.name}</Card.Title>
            <UserSchoolList
              category={category}
              list={this.filteredSchools()}
              removeSchool={this.props.removeSchool}
            />
          </Card.Body>
        </Card>
      </div>
    );
  }
}
