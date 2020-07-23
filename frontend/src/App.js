import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginContainer from "./containers/LoginContainer";
import SignUpContainer from "./containers/SignUpContainer";
import SchoolsContainer from "./containers/SchoolsContainer.js";
import IndividualSchoolContainer from "./containers/IndividualSchoolContainer.js";
import ProfileContainer from "./containers/ProfileContainer.js";
import ResourcesContainer from "./containers/ResourcesContainer.js";
import NavBar from "./components/NavBar";

class App extends React.Component {
  state = {
    loggedIn: false,
  };

  componentDidMount() {
    if (localStorage.token) {
      this.setState({
        loggedIn: true,
      });
    }
  }

  logout = () => {
    localStorage.clear();
    this.setState({
      loggedIn: false,
    });
  };

  login = () => {
    this.setState({
      loggedIn: true,
    });
  };
  render() {
    if (!this.state.loggedIn)
      return (
        <div>
          <BrowserRouter>
            <NavBar logout={this.logout} loggedIn={this.state.loggedIn} />
            <Switch>
              <Route
                exact
                path="/login"
                render={(routeProps) => (
                  <LoginContainer login={this.login} {...routeProps} />
                )}
              />
              <Route
                exact
                path="/signup"
                render={(routeProps) => (
                  <SignUpContainer login={this.login} {...routeProps} />
                )}
              />
            </Switch>
          </BrowserRouter>
        </div>
      );
    return (
      <div className="App">
        <BrowserRouter>
          <NavBar logout={this.logout} loggedIn={this.state.loggedIn} />
          <div style={{ margin: "20px" }}>
            <Switch>
              <Route
                exact
                path="/login"
                render={(routeProps) => (
                  <LoginContainer login={this.login} {...routeProps} />
                )}
              />
              <Route
                exact
                path="/signup"
                render={(routeProps) => (
                  <SignUpContainer login={this.login} {...routeProps} />
                )}
              />
              <Route
                exact
                path="/schools"
                render={(routeProps) => <SchoolsContainer {...routeProps} />}
              />
              <Route
                exact
                path="/resources"
                render={(routeProps) => <ResourcesContainer {...routeProps} />}
              />
              <Route
                exact
                path="/profile"
                render={(routeProps) => {
                  return (
                    <div>
                      <ProfileContainer {...routeProps} />
                    </div>
                  );
                }}
              />
              <Route
                exact
                path="/"
                render={(routeProps) => <ProfileContainer {...routeProps} />}
              />
              <Route
                exact
                path="/schools/:id"
                render={(routeProps) => (
                  <IndividualSchoolContainer {...routeProps} />
                )}
              />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
