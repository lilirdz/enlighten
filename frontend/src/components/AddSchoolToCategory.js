import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default class AddSchoolToCategory extends React.Component {
  state = {
    show: false,
    userCategories: [],
    isLoading: true,
  };

  handleModal = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  componentDidMount() {
    this.fetchUserCategories();
  }

  fetchUserCategories = () => {
    fetch(`http://localhost:3000/api/v1/users/${localStorage.user_id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((res) => res.json())
      .then((userCategories) => {
        this.setState({
          userCategories: userCategories.categories,
          isLoading: false,
        });
      });
  };

  saveSchool = () => {
    fetch("http://localhost:3000/api/v1/prospective_schools", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
        "Content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        school_id: this.props.school.id,
        user_id: localStorage.user_id,
        category_id: this.state.category_id,
      }),
    })
      .then((res) => res.json())
      .then(() => {
        this.handleModal();
      });
  };
  render() {
    console.log(this.state.userCategories);

    console.log(this.props.school.id);
    console.log(localStorage.user_id);
    return (
      <div>
        <Button onClick={this.handleModal}>Add School</Button>
        <Modal show={this.state.show}>
          <Modal.Header
            className="lib-header"
            closeButton
            onClick={this.handleModal}
          >
            <Modal.Title>Add School To a Category</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Select the Category you want to add this school to.
            <label>
              <select
                onChange={(e) =>
                  this.setState({ category_id: e.currentTarget.value })
                }
              >
                <strong>Your Categories</strong>
                <option selected disabled>
                  choose a Category...
                </option>
                {this.state.userCategories.map((category) => {
                  return <option value={category.id}>{category.name}</option>;
                })}
              </select>
            </label>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleModal}>
              Close
            </Button>
            <Button onClick={this.saveSchool} className="edit-btn">
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
