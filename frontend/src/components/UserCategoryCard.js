import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import UserSchoolList from "../components/UserSchoolList";

export default class UserCategoryCard extends React.Component {
  state = {
    show: false,
    name: this.props.category.name,
  };

  handleModal = () => {
    this.setState({
      show: !this.state.show,
    });
  };

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
      });
  };

  editCategory = () => {
    let id = this.props.category.id;
    fetch(`http://localhost:3000/api/v1/categories/${id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: this.state.name,
      }),
    })
      .then((res) => res.json())
      .then((updatedCategory) => {
        this.setState({
          name: updatedCategory.name,
        });
        this.handleModal();
      });
  };

  render() {
    const { category } = this.props;

    return (
      <div>
        <Card>
          <Card.Body>
            <Card.Title>{this.state.name}</Card.Title>
            <UserSchoolList
              category={category}
              list={this.filteredSchools()}
              removeSchool={this.props.removeSchool}
            />
            <Button id={category.id} onClick={this.deleteCategory}>
              Delete Category
            </Button>
            <Button id={category.id} onClick={this.handleModal}>
              Edit Category
            </Button>
          </Card.Body>
        </Card>
        <Modal show={this.state.show}>
          <Modal.Header closeButton onClick={() => this.handleModal()}>
            <Modal.Title>Rename Your Category</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <label>
              <label>New Name</label>
              <input
                type="text"
                value={this.state.name}
                onChange={(e) => this.setState({ name: e.target.value })}
              />
            </label>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => this.handleModal()}>
              Close
            </Button>
            <Button onClick={this.editCategory} variant="primary">
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
