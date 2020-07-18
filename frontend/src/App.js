import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginContainer from "./containers/LoginContainer";

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
            {/* <NavBar logout={this.logout} loggedIn={this.state.loggedIn} /> */}
            <Switch>
              <Route
                exact
                path="/log-in"
                render={(routeProps) => (
                  <LoginContainer login={this.login} {...routeProps} />
                )}
              />
            </Switch>
          </BrowserRouter>
        </div>
      );
  }
}

export default App;
