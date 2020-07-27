import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const style = {
  // background: "#9FA0FF",
  background: "linear-gradient(45deg, #9FA0FF 30%, #00d4ff 90%)",
  color: "white",
  marginTop: -65,
  boxShadow: "0 3px 5px 2px rgba(159, 160, 255, 0.5)",
};

export default class AddSchoolToCategory extends React.Component {
  state = {
    show: false,
    userCategories: [],
    isLoading: true,
    open: false,
  };

  handleModal = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  handleSaveClick = () => {
    this.setState({
      open: true,
    });
  };

  handleCloseSnackbar = () => {
    this.setState({
      open: false,
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
        // console.log(userCategories);
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
      },
      body: JSON.stringify({
        school_id: this.props.school.id,
        user_id: localStorage.user_id,
        category_id: this.state.category_id,
      }),
    })
      .then((res) => res.json())
      .then(() => {
        this.handleSaveClick();
        this.handleModal();
        // this.props.routeProps.history.push("/profile");
      });
  };
  render() {
    // console.log(this.state.userCategories);

    return (
      <div>
        {/* <Button onClick={this.handleModal}>Add School</Button> */}
        <Fab
          style={style}
          aria-label="add"
          onClick={this.handleModal}
          className="add-btn"
        >
          <AddIcon />
        </Fab>
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
                <option>Choose a Category...</option>
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
              Add School
            </Button>
          </Modal.Footer>
        </Modal>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          open={this.state.open}
          autoHideDuration={6000}
          onClose={this.handleCloseSnackbar}
          message="School has Been Added!"
          action={
            <React.Fragment>
              <IconButton
                size="small"
                aria-label="close"
                onClick={this.handleCloseSnackbar}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        />
      </div>
    );
  }
}
