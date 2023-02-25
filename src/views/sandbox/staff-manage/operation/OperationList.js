import React from "react";
import TabsList from "../../../../components/tabs/TabsList";
export default function OperationList() {
  const items = [
    {
      label: "操作日志",
      key: "7",
      children: "这里可以是操作日志"
    }
  ];
  return <TabsList defaultActiveKey="1" items={items} />;
}
