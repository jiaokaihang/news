import React, { useState, useEffect } from "react";
import { Layout, Menu } from "antd";
import { withRouter } from "react-router-dom";
import {
  HomeOutlined,
  UserOutlined,
  HighlightOutlined,
  SolutionOutlined,
  UserSwitchOutlined,
  DisconnectOutlined,
  FolderOpenOutlined,
  FormOutlined,
  FileDoneOutlined,
  UnorderedListOutlined,
  CheckSquareOutlined,
  VerticalAlignTopOutlined
} from "@ant-design/icons";
import "./index.css";
import axios from "axios";

const { Sider } = Layout;
const { SubMenu } = Menu;
// const menuList = [
//   {
//     key: "/home",
//     title: "DashBoard",
//     icon: <HomeOutlined />
//   },
//   {
//     key: "/user-manage",
//     title: "客户管理",
//     icon: <UserOutlined />,
//     children: [
//       {
//         key: "/user-manage/list",
//         title: "用户列表"
//       }
//     ]
//   },
//   {
//     key: "/right-manage",
//     title: "设备管理",
//     icon: <DesktopOutlined />,
//     children: [
//       {
//         key: "/right-manage/role/list",
//         title: "设备管理"
//       },
//       {
//         key: "/right-manage/right/list",
//         title: "设备地图"
//       }
//     ]
//   },
//   {
//     key: "/staff-manage",
//     title: "员工管理",
//     icon: <TeamOutlined />,
//     children: [
//       {
//         key: "/staff-manage/staff/list",
//         title: "员工信息"
//       },
//       {
//         key: "/staff-manage/operation/list",
//         title: "操作日志"
//       }
//     ]
//   },
//   {
//     key: "/alarm-manage",
//     title: "告警系统",
//     icon: <LinkOutlined />,
//     children: [
//       {
//         key: "/alarm-manage/security/list",
//         title: "安全报警检测"
//       },
//       {
//         key: "/staff-manage/alarmList/list",
//         title: "报警清单",
//         children: [
//           {
//             key: "/alarmList/all/list",
//             title: "所有告警"
//           },
//           {
//             key: "/alarmList/combustion/list",
//             title: "安全报警检测"
//           },
//           {
//             key: "/alarmList/danger/list",
//             title: "危险气体告警"
//           },
//           {
//             key: "/alarmList/counter/list",
//             title: "反恐类告警"
//           },
//           {
//             key: "/alarmList/fault/list",
//             title: "设备运行故障告警"
//           }
//         ]
//       }
//     ]
//   },
//   {
//     key: "/repair-manage",
//     title: "设施维修维护",
//     icon: <DeploymentUnitOutlined />,
//     children: [
//       {
//         key: "/repair-manage/allReparir/list",
//         title: "所有清单"
//       },
//       {
//         key: "/repair-manage/waitReparir/list",
//         title: "等待派单"
//       },
//       {
//         key: "/repair-manage/underwayRepair/list",
//         title: "正在进行中"
//       },
//       {
//         key: "/repair-manage/completeRepair/list",
//         title: "已完成"
//       }
//     ]
//   },
//   {
//     key: "/statistics-manage",
//     title: "运营统计报表",
//     icon: <BellOutlined />,
//     children: [
//       {
//         key: "/statistics-manage/airQuality/list",
//         title: "空气质量统计报表"
//       },
//       {
//         key: "/statistics-manage/runningState/list",
//         title: "设备运行状态报表"
//       }
//     ]
//   },
//   {
//     key: "system-management",
//     title: "系统管理",
//     icon: <BarChartOutlined />,
//     children: [
//       {
//         key: "/system-management/permission/list",
//         title: "权限管理"
//       },
//       {
//         key: "/system-management/download/list",
//         title: "App下载管理"
//       }
//     ]
//   }
// ];

function SideMenu(props) {
  const [collapsed] = useState(false);
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:8000/rights?_embed=children`).then(res => {
      console.log(res.data);
      setMenu(res.data);
    });
  }, []);
  const checkPagePermission = item => {
    //判断返回的字段是否是true
    return item.pagepermisson === 1;
  };
  const iconList = {
    "/home": <HomeOutlined />,
    "/user-manage/list": <HighlightOutlined />,
    "/right-manage/role/list": <SolutionOutlined />,
    "/right-manage/right/list": <UserOutlined />,
    "/user-manage": <UserSwitchOutlined />,
    "/right-manage": <DisconnectOutlined />,
    "/news-manage": <FolderOpenOutlined />,
    "/news-manage/add": <FormOutlined />,
    "/news-manage/draft": <FileDoneOutlined />,
    "/news-manage/category": <UnorderedListOutlined />,
    "/audit-manage": <CheckSquareOutlined />, //审核管理
    "/publish-manage": <VerticalAlignTopOutlined /> //发布管理
  };
  const renderMenu = menuList => {
    return menuList.map(item => {
      if (item.children?.length > 0 && checkPagePermission(item)) {
        return (
          <SubMenu icon={iconList[item.key]} title={item.title} key={item.key}>
            {/* 递归遍历下一级 */}
            {renderMenu(item.children)}
          </SubMenu>
        );
      }
      return (
        checkPagePermission(item) && (
          <Menu.Item
            icon={iconList[item.key]}
            key={item.key}
            onClick={() => {
              props.history.push(item.key);
            }}
          >
            {item.title}
          </Menu.Item>
        )
      );
    });
  };
  console.log(props.location.pathname);
  const selectKeys = [props.location.pathname]; //刷新后高亮显示
  const openKeys = ["/" + props.location.pathname.split("/")[1]];
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div style={{ display: "flex", height: "100%", flexDirection: "column" }}>
        <div className="logo">
          <img src="./logo.png" />
        </div>
        <div style={{ flex: 1, overflow: "auto" }}>
          <Menu
            theme="dark"
            mode="inline"
            selectedKeys={selectKeys}
            defaultOpenKeys={openKeys}
          >
            {renderMenu(menu)}
          </Menu>
        </div>
      </div>
    </Sider>
  );
}
export default withRouter(SideMenu);
