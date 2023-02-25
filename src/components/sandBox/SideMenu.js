import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { withRouter } from "react-router-dom";
import {
  HomeOutlined,
  UserOutlined,
  DesktopOutlined,
  TeamOutlined,
  LinkOutlined,
  DeploymentUnitOutlined,
  BellOutlined,
  BarChartOutlined
} from "@ant-design/icons";
import "./index.css";
// function getItem(label, key, icon, children, type) {
//   return {
//     key,
//     icon,
//     children,
//     label,
//     type
//   };
// }
// const items = [
//   getItem("DashBoard", "/home", <HomeOutlined />),
//   getItem("客户管理", "sub2", <TeamOutlined />, [getItem("客户管理", "1")]),
//   getItem("设备管理", "sub3", <DesktopOutlined />, [
//     getItem("设备管理", "2"),
//     getItem("设备地图", "11")
//   ]),
//   getItem("员工管理", "sub4", <UserOutlined />, [
//     getItem("员工管理", "3"),
//     getItem("操作日志", "33")
//   ]),
//   getItem("告警系统", "sub5", <BellOutlined />, [
//     getItem("安全报警检测", "4"),
//     getItem("报警清单", "1", null, [
//       getItem("所有告警", "71"),
//       getItem("自燃类告警", "81"),
//       getItem("危险气体告警", "21"),
//       getItem("反恐类告警", "51"),
//       getItem("设备运行估值告警", "01")
//     ])
//   ]),
//   getItem("设施维修维护", "sub6", <LinkOutlined />, [
//     getItem("所有清单", "52"),
//     getItem("等待派单", "53"),
//     getItem("正在进行中", "54"),
//     getItem("已完成", "55")
//   ]),
//   getItem("运营统计报表", "sub7", <BarChartOutlined />, [
//     getItem("空气质量统计报表", "62"),
//     getItem("设备运行状态报表", "63")
//   ]),
//   getItem("系统管理", "sub8", <DeploymentUnitOutlined />, [
//     getItem("权限管理", "72"),
//     getItem("App下载管理", "73")
//   ])
// ];
const { Sider } = Layout;
const { SubMenu } = Menu;
const menuList = [
  {
    key: "/home",
    title: "DashBoard",
    icon: <HomeOutlined />
  },
  {
    key: "/user-manage",
    title: "客户管理",
    icon: <UserOutlined />,
    children: [
      {
        key: "/user-manage/list",
        title: "用户列表"
      }
    ]
  },
  {
    key: "/right-manage",
    title: "设备管理",
    icon: <DesktopOutlined />,
    children: [
      {
        key: "/right-manage/role/list",
        title: "设备管理"
      },
      {
        key: "/right-manage/right/list",
        title: "设备地图"
      }
    ]
  },
  {
    key: "/staff-manage",
    title: "员工管理",
    icon: <TeamOutlined />,
    children: [
      {
        key: "/staff-manage/staff/list",
        title: "员工信息"
      },
      {
        key: "/staff-manage/operation/list",
        title: "操作日志"
      }
    ]
  },
  {
    key: "/alarm-manage",
    title: "告警系统",
    icon: <LinkOutlined />,
    children: [
      {
        key: "/alarm-manage/security/list",
        title: "安全报警检测"
      },
      {
        key: "/staff-manage/alarmList/list",
        title: "报警清单",
        children: [
          {
            key: "/alarmList/all/list",
            title: "所有告警"
          },
          {
            key: "/alarmList/combustion/list",
            title: "安全报警检测"
          },
          {
            key: "/alarmList/danger/list",
            title: "危险气体告警"
          },
          {
            key: "/alarmList/counter/list",
            title: "反恐类告警"
          },
          {
            key: "/alarmList/fault/list",
            title: "设备运行故障告警"
          }
        ]
      }
    ]
  },
  {
    key: "/repair-manage",
    title: "设施维修维护",
    icon: <DeploymentUnitOutlined />,
    children: [
      {
        key: "/repair-manage/allReparir/list",
        title: "所有清单"
      },
      {
        key: "/repair-manage/waitReparir/list",
        title: "等待派单"
      },
      {
        key: "/repair-manage/underwayRepair/list",
        title: "正在进行中"
      },
      {
        key: "/repair-manage/completeRepair/list",
        title: "已完成"
      }
    ]
  },
  {
    key: "/statistics-manage",
    title: "运营统计报表",
    icon: <BellOutlined />,
    children: [
      {
        key: "/statistics-manage/airQuality/list",
        title: "空气质量统计报表"
      },
      {
        key: "/statistics-manage/runningState/list",
        title: "设备运行状态报表"
      }
    ]
  },
  {
    key: "system-management",
    title: "系统管理",
    icon: <BarChartOutlined />,
    children: [
      {
        key: "/system-management/permission/list",
        title: "权限管理"
      },
      {
        key: "/system-management/download/list",
        title: "App下载管理"
      }
    ]
  }
];

function SideMenu(props) {
  const [collapsed] = useState(false);
  const renderMenu = menuList => {
    return menuList.map(item => {
      if (item.children) {
        return (
          <SubMenu icon={item.icon} title={item.title} key={item.key}>
            {/* 递归遍历下一级 */}
            {renderMenu(item.children)}
          </SubMenu>
        );
      }
      return (
        <Menu.Item
          icon={item.icon}
          key={item.key}
          onClick={() => {
            props.history.push(item.key);
          }}
        >
          {item.title}
        </Menu.Item>
      );
    });
  };
  //刷新后高亮显示
  const selectedKeys = [props.location.pathname];
  const openKeys = ["/" + props.location.pathname.split("/")[1]];
  console.log(openKeys);
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo">
        <img src="./logo.png" />
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={selectedKeys}
        defaultOpenKeys={openKeys} //刷新后高亮显示
      >
        {renderMenu(menuList)}
      </Menu>
    </Sider>
  );
}
export default withRouter(SideMenu);
