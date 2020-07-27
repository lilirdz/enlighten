import React from "react";
import Card from "react-bootstrap/Card";
import IconButton from "@material-ui/core/IconButton";
import ClearIcon from "@material-ui/icons/Clear";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";

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
        <Card className="user-schools-card">
          <Card.Body>
            <List>
              {this.props.list.map((x) => (
                <div>
                  <ListItem className="school-list-item">
                    <ListItemText>
                      <a href={"/schools/" + x.school.id}>{x.school.name}</a>
                    </ListItemText>

                    <ListItemSecondaryAction>
                      <IconButton size="small" edge="end">
                        <ClearIcon
                          id={x.id}
                          onClick={this.deleteSchool}
                          fontSize="small"
                        />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                </div>
              ))}
            </List>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
