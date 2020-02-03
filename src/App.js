import React, { Component } from "react";
import "./styles.css";
import Signin from "./components/Signin";
import Welcome from "./components/Welcome";

class App extends Component {
  state = { showWelcome: false };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
      errorMsg: ""
    });
  };

  handleClick = () => {
    if (this.state.password !== "abc123") {
      this.setState({
        showWelcome: false,
        errorMsg: "Invalid user or password"
      });
    } else {
      this.setState({ showWelcome: true, errorMsg: "" });
    }
  };
  handleLogout = () => {
    this.setState({ showWelcome: false });
  };
  render() {
    return (
      <div className="App">
        {this.state.showWelcome ? (
          <Welcome user={this.state.user} handleLogout={this.handleLogout} />
        ) : (
          <Signin
            handleClick={this.handleClick}
            handleChange={this.handleChange}
            errorMsg={this.state.errorMsg}
          />
        )}
      </div>
    );
  }
}
export default App;
