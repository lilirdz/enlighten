import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import EditableLabel from "react-inline-editing";
import UserSchoolList from "../components/UserSchoolList";
import AddIcon from "@material-ui/icons/Add";
// import {Droppable} from "react-beautiful-dnd"

export default class UserCategoryCard extends React.Component {
  state = {
    name: this.props.category.name,
  };

  filteredSchools = () => {
    let filteredSchools = this.props.schools.filter(
      (schoolObj) => schoolObj.category === this.props.category.name
    );
    return filteredSchools;
  };

  deleteCategory = (e) => {
    const id = e.target.id;
    console.log(id);
    fetch(`http://localhost:3000/api/v1/categories/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${localStorage.token}` },
    })
      .then((res) => res.json())
      .then(() => {
        this.props.removeCategory(id);
      });
  };

  editCategory = (text) => {
    let id = this.props.category.id;
    fetch(`http://localhost:3000/api/v1/categories/${id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: text,
      }),
    })
      .then((res) => res.json())
      .then((updatedCategory) => {
        this.setState({
          name: updatedCategory.name,
        });
      });
  };

  render() {
    const { category } = this.props;

    return (
      <div>
        {/* <Droppable droppableId={this.props.category.id}> */}
        {/* {(provided) => ( */}
        <Card className="user-category-card">
          <Card.Body>
            <Card.Title className="category-name-header">
              <EditableLabel
                text={this.state.name}
                labelClassName="myLabelClass"
                inputClassName="myInputClass"
                inputWidth="200px"
                inputHeight="25px"
                inputMaxLength="50"
                onChange={(e) => this.setState({ name: e.target.value })}
                onFocusOut={this.editCategory}
              />
            </Card.Title>
            <a href="/schools">
              <Button className="add-school">
                <AddIcon fontSize="medium"></AddIcon>
              </Button>
            </a>
            <UserSchoolList
              category={category}
              list={this.filteredSchools()}
              removeSchool={this.props.removeSchool}
            />
            <Button
              className="delete-category-btn"
              id={category.id}
              onClick={this.deleteCategory}
            >
              <DeleteIcon size="small" className="delete-icon" />
              Delete Category
            </Button>
          </Card.Body>
        </Card>
        {/* )} */}
        {/* </Droppable> */}
      </div>
    );
  }
}
