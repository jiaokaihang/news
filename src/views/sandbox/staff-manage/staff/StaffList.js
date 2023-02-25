import React from "react";
import TabsList from "../../../../components/tabs/TabsList";
import Staff from "./Staff";
export default function StaffList() {
  const items = [
    {
      label: "员工清单",
      key: "5",
      children: <Staff />
    },
    {
      label: "创建新员工",
      key: "6",
      children: "这里可以创建新的员工"
    }
  ];
  return <TabsList defaultActiveKey="1" items={items} />;
}
