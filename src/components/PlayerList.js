import React, { Component } from "react";
import { Table } from "antd";

class PlayerList extends Component {
  render() {
    const columns = [
      { title: "Name", dataIndex: "name",   key: "name"},
      { title: 'Comments', dataIndex: 'comments', key: 'comments'}
    ];
    const data = [
      { key: "1", name: "Jose"   },
      { key: "2", name: "Felipe" },
      { key: "3", name: "Manuel" },
    ];
    const pagination = { position: "none" };
    return (
      <Table columns={columns} dataSource={data} pagination={pagination} />
    );
  }
}
export default PlayerList;
