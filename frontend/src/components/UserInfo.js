import React from "react";
import Chongo from "../images/Chongo.png";
import CreateCategory from "../components/CreateCategory";
import CircularProgress from "@material-ui/core/CircularProgress";

const style = {
  color: "#9FA0FF",
  marginTop: 300,
};

export default class UserInfo extends React.Component {
  render() {
    return (
      <div>
        {this.props.details === null ? (
          <CircularProgress style={style} />
        ) : (
          <div>
            <img src={Chongo} alt="user-pic" />
            <h2>Hi, {this.props.details.name}</h2>
            <CreateCategory
              addCategory={this.props.addCategory}
              routeProps={this.props.routeProps}
            />
          </div>
        )}
      </div>
    );
  }
}
