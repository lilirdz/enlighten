import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import UserSchoolList from "../components/UserSchoolList";

export default class UserCategoryCard extends React.Component {
  filteredSchools = () => {
    let filteredSchools = this.props.schools.filter(
      (schoolObj) => schoolObj.category === this.props.category.name
    );
    return filteredSchools;
  };

  deleteCategory = (e) => {
    const id = e.target.id;
    fetch(`http://localhost:3000/api/v1/categories/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${localStorage.token}` },
    })
      .then((res) => res.json())
      .then(() => {
        this.props.removeCategory(id);
        // console.log(obj);
      });
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
            <Button id={category.id} onClick={this.deleteCategory}>
              Delete
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
