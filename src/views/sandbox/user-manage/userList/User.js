import React, { useState, useEffect } from "react";
import TableList from "../../../../components/table/TableList";
import axios from "axios";
export default function User() {
  const [datasource, setDatasource] = useState([]);
  const parameter = JSON.parse(localStorage.getItem("customerid"));
  const paginations = {
    pageSize: 5
  };
  const columns = [
    {
      title: "序号",
      dataIndex: "customerid",
      align: "center"
    },
    {
      title: "名称",
      dataIndex: "name",
      align: "center"
    },
    {
      title: "客户的登录名称",
      dataIndex: "loginname",
      align: "center"
    }
  ];
  let data;

  useEffect(() => {
    axios({
      method: "get",
      url:
        `http://112.13.102.162:8080/proxy/socialgraph/queryMyCustomerList?customerid=` +
        parameter,
      headers: { "Content-Type": "application/json" }
    }).then(res => {
      console.log(res);
      data = res.data.responseDataObj.customerInfos;
      setDatasource(data);
      console.log(data);
    });
  }, []);
  return (
    <TableList
      dataSource={datasource}
      pagination={paginations}
      columns={columns}
      rowSelection={false}
    />
  );
}
