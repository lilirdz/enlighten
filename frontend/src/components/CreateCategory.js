import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default class CreateCategory extends React.Component {
  state = {
    show: false,
    name: "",
  };

  createCategory = (e) => {
    fetch("http://localhost:3000/api/v1/categories", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: this.state.name,
        user_id: localStorage.user_id,
      }),
    })
      .then((res) => res.json())
      .then((obj) => {
        this.props.addCategory(obj);
        this.handleModal();
      });
  };

  handleModal = () => {
    this.setState({
      show: !this.state.show,
    });
  };
  render() {
    return (
      <div>
        <Button onClick={this.handleModal}>Create a New Category</Button>
        <Modal show={this.state.show}>
          <Modal.Header closeButton onClick={() => this.handleModal()}>
            <Modal.Title>Create A Category</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <label>
              <label>Name Your Category</label>
              <input
                type="text"
                placeholder="Category's Name"
                value={this.state.name}
                onChange={(e) => this.setState({ name: e.target.value })}
              />
            </label>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => this.handleModal()}>
              Close
            </Button>
            <Button onClick={this.createCategory} variant="primary">
              Create!
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
