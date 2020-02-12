import React, { Component } from "react";
import PlayerList from "./PlayerList";
import { Button} from "antd";
import 'antd/dist/antd.css';

class Welcome extends Component {
  render() {
    return (
      <div>
        Welcome {this.props.user}
        <button onClick={this.props.handleLogout}>Logout</button>
        <br/>
        <Button type="primary">I'll Play</Button>
        <h1>Playing today</h1>
        <PlayerList />
      </div>
    );
  }
}
export default Welcome;
