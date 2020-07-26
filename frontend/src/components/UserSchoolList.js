import React from "react";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
// import Button from "react-bootstrap/Button";
import IconButton from "@material-ui/core/IconButton";
import ClearIcon from "@material-ui/icons/Clear";

export default class UserSchoolList extends React.Component {
  deleteSchool = (e) => {
    const id = e.target.id;
    fetch(`http://localhost:3000/api/v1/prospective_schools/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${localStorage.token}` },
    })
      .then((res) => res.json())
      .then((obj) => {
        this.props.removeSchool(id, this.props.category.id);
        console.log(obj);
      });
  };
  render() {
    // console.log(this.props.list.data.schools);
    // console.log(this.props.category.id);
    return (
      <div>
        <Card>
          <Card.Body>
            <Table>
              <thead>
                <tr>
                  <th>School Name</th>
                  <th>School City</th>
                  <th>School State</th>
                  <th>Delete School</th>
                </tr>
              </thead>
              <tbody>
                {this.props.list.map((x) => (
                  <div>
                    <tr>
                      <td>{x.school.name}</td>
                      <td>{x.school.city}</td>
                      <td>{x.school.state}</td>
                      <td>
                        {/* <Button id={x.id} onClick={this.deleteSchool}>
                          Delete School
                        </Button> */}
                        <IconButton size="small">
                          <ClearIcon
                            id={x.id}
                            onClick={this.deleteSchool}
                            fontSize="small"
                          />
                        </IconButton>
                      </td>
                    </tr>
                  </div>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
