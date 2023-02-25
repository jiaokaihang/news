import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import SideMenu from "../../components/sandBox/SideMenu";
import TopHeader from "../../components/sandBox/TopHeader";
import Home from "./home/Home";
import UserList from "./user-manage/userList/UserList";
import RoleList from "./right-manage/roleList/RoleList";
import RightList from "./right-manage/RightList/RightList";
import NoPermission from "./nopermission/NoPermission";
import StaffList from "./staff-manage/staff/StaffList";
import OperationList from "./staff-manage/operation/OperationList";
import Security from "./alarm-manage/security/Security";
import AllList from "./alarm-manage/AlarmList/AllList";
import CombustionList from "./alarm-manage/AlarmList/CombustionList";
import Danger from "./alarm-manage/AlarmList/Danger";
import CounterList from "./alarm-manage/AlarmList/CounterList";
import Fault from "./alarm-manage/AlarmList/Fault";
//antd
import { Layout } from "antd";
//css样式
import "./NewssandBox.css";
import AllRepair from "./repair-manage/all-repair/AllRepair";
import WaitRepair from "./repair-manage/all-repair/WaitRepair";
import UnderwayRepair from "./repair-manage/all-repair/UnderwayRepair";
import CompleteRepair from "./repair-manage/all-repair/CompleteRepair";
import AirQuality from "./statistics-manage/AirQuality";
import RunningState from "./statistics-manage/RunningState";
import Permission from "./system-management/Permission";
import Download from "./system-management/Download";

const { Content } = Layout;

export default function NewsSandBox() {
  return (
    <Layout>
      <SideMenu></SideMenu>
      <Layout className="site-layout">
        <TopHeader></TopHeader>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            overflow: "auto"
          }}
        >
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/user-manage/list" component={UserList} />
            <Route path="/right-manage/role/list" component={RoleList} />
            <Route path="/right-manage/right/list" component={RightList} />
            <Route path="/staff-manage/staff/list" component={StaffList} />
            <Route path="/alarm-manage/security/list" component={Security} />
            <Route path="/alarmList/all/list" component={AllList} />
            <Route
              path="/alarmList/combustion/list"
              component={CombustionList}
            />
            <Route path="/alarmList/danger/list" component={Danger} />
            <Route path="/alarmList/counter/list" component={CounterList} />
            <Route path="/alarmList/fault/list" component={Fault} />
            <Route
              path="/staff-manage/operation/list"
              component={OperationList}
            />
            <Route
              path="/repair-manage/allReparir/list"
              component={AllRepair}
            />
            <Route
              path="/repair-manage/waitReparir/list"
              component={WaitRepair}
            />
            <Route
              path="/repair-manage/underwayRepair/list"
              component={UnderwayRepair}
            />
            <Route
              path="/repair-manage/completeRepair/list"
              component={CompleteRepair}
            />
            <Route
              path="/statistics-manage/airQuality/list"
              component={AirQuality}
            />
            <Route
              path="/statistics-manage/runningState/list"
              component={RunningState}
            />
            <Route
              path="/system-management/permission/list"
              component={Permission}
            />
            <Route
              path="/system-management/download/list"
              component={Download}
            />

            {/* 如果什么路径都没有，那就重定向到home页面中 */}
            <Redirect from="/" to="/home" exact />
            <Route path="*" component={NoPermission} />
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
}
