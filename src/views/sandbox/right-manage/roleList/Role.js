import React, { useState, useEffect } from "react";
import TableList from "../../../../components/table/TableList";
import axios from "axios";
export default function Role() {
  const [datasource, setDatasource] = useState([]);
  const paginations = {
    pageSize: 5
  };
  const columns = [
    {
      title: "设备ID",
      dataIndex: "deviceid",
      align: "center",
      key: "deviceid"
    },
    {
      title: "设备名称",
      dataIndex: "dagname",
      align: "center",
      key: "dagname"
    },
    {
      title: "终端类型",
      dataIndex: "terminaltype",
      align: "center",
      key: "terminaltype"
    },
    {
      title: "出厂时间",
      dataIndex: "updatetime",
      align: "center",
      key: "updatetime"
    }
  ];
  let data, arr;

  useEffect(() => {
    axios({
      method: "get",
      url: `http://112.13.102.162:8080/proxy/socialgraph/querydeviceinfo`,
      headers: { "Content-Type": "application/json" }
    }).then(res => {
      console.log("res", res.data.responseDataObj.terminalInfo);
      data = res.data.responseDataObj.terminalInfo;
      console.log("data", data);
      for (let i in data) {
        arr = [
          {
            key: i,
            deviceid: data.deviceid,
            dagname: data.dagname,
            terminaltype: data.terminaltype,
            updatetime: data.updatetime
          }
        ];
      }

      setDatasource(arr);
      console.log(arr);
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
