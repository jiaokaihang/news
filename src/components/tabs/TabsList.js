import React from "react";
import { Tabs } from "antd";

function TabsList(props) {
  return (
    <Tabs
      defaultActiveKey={props.defaultActiveKey ? props.defaultActiveKey : "1"}
      items={props.items}
      onChange={props.onChange}
    />
  );
}

export default TabsList;
