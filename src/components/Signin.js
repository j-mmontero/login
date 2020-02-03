import React, { Component } from "react";

class Signin extends Component {
  render() {
    return (
      <div>
        User:{" "}
        <input type="text" name="user" onChange={this.props.handleChange} />
        Password:{" "}
        <input
          type="password"
          name="password"
          onChange={this.props.handleChange}
        />
        <button onClick={this.props.handleClick}>Sign In</button>
        <div>{this.props.errorMsg}</div>
      </div>
    );
  }
}
export default Signin;
