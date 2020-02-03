import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return (
      <div>
        Welcome {this.props.user}
        <button onClick={this.props.handleLogout}>Logout</button>
      </div>
    );
  }
}
export default Welcome;
