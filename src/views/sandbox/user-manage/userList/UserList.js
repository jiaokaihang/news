import React from "react";
import TabsList from "../../../../components/tabs/TabsList";
import User from "./User";
export default function UserList() {
  const items = [
    {
      label: "企业用户",
      key: "1",
      children: <User />
    },
    {
      label: "添加企业用户",
      key: "2",
      children: "这里是添加企业新用户的"
    }
  ];

  return (
    <div>
      <TabsList defaultActiveKey="1" items={items} />
    </div>
  );
}
