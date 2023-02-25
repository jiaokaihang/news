import React, { useState } from "react";
import { Layout, Dropdown, Menu, Avatar } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { withRouter } from "react-router-dom";
const { Header } = Layout;
function TopHeader(props) {
  const [collapsed, setCollapsed] = useState(false);
  const loginname = localStorage.getItem("loginname");
  const menu = (
    <Menu>
      <Menu.Item key={"1"}>超级管理员</Menu.Item>
      <Menu.Item
        danger
        key={"2"}
        onClick={() => {
          localStorage.removeItem("token");
          props.history.replace("/login");
        }}
      >
        退出
      </Menu.Item>
    </Menu>
  );
  return (
    <Header
      className="site-layout-background"
      style={{
        padding: "0 16px"
      }}
    >
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: "trigger",
        onClick: () => setCollapsed(!collapsed)
      })}
      <div style={{ float: "right" }}>
        <span>
          欢迎<span style={{ color: "#1890ff" }}>{loginname}</span>回来
          <Dropdown overlay={menu}>
            <span>
              <Avatar src={<img src={"./duan.jpeg"} alt="avatar" />} />
              {/* <DownOutlined /> */}
            </span>
          </Dropdown>
        </span>
      </div>
    </Header>
  );
}
export default withRouter(TopHeader);
