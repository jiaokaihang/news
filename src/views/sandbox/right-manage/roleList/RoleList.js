import React from "react";
import TabsList from "../../../../components/tabs/TabsList";
import Role from "./Role";
export default function RoleList() {
  const items = [
    {
      label: "设备信息",
      key: "3",
      children: <Role />
    },
    {
      label: "出厂设备导入",
      key: "4",
      children: "这里是添加企业新用户的"
    }
  ];
  return <TabsList defaultActiveKey="1" items={items} />;
}
