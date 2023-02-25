import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, message } from "antd";
import "./Login.css";
import ReactCanvasNes from "react-canvas-nest";
import axios from "axios";
export default function Login(props) {
  const onFinish = values => {
    console.log(values);
    axios({
      method: "post",
      url: "http://112.13.102.162:8080/proxy/socialgraph/login",
      data: {
        loginname: values.username,
        password: values.password
      },
      headers: { "Content-Type": "application/json" }
    }).then(res => {
      console.log(res);
      if (res.data.result === "success") {
        let username = JSON.parse(res.config.data);
        console.log(username.loginname);
        localStorage.setItem(
          "token",
          JSON.stringify(res.data.responseDataObj.customerInfo.token),
          localStorage.setItem("loginname", username.loginname),
          localStorage.setItem(
            "customerid",
            JSON.stringify(res.data.responseDataObj.customerInfo.customerid)
          )
        );
        props.history.push("/");
      } else {
        message.error("用户名或密码错误");
      }
    });
  };
  return (
    <div style={{ background: "rgb(35,39,65)", height: "100%" }}>
      <ReactCanvasNes /* 粒子效果 */
        className="canvasNest"
        config={{
          pointColor: " 255, 255, 255 ",
          lineColor: "255,255,255",
          pointOpacity: 0.5,
          pointR: 4,
          count: 100
        }}
        style={{ zIndex: 1 }}
      />
      <div className="formContainer">
        <div className="logintitle">ITS管理系统</div>
        <Form name="normal_login" className="login-form" onFinish={onFinish}>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "请输入您的用户名"
              }
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="请输入您的用户名"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "请输入您的密码"
              }
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="请输入您的密码"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
