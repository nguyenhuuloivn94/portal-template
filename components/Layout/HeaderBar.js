import {
  Popover,
  Layout,
  Button,
  Row,
  Col,
  Space,
  Avatar,
  Divider,
} from "antd";
import React from "react";
import { UserOutlined } from "@ant-design/icons";
import Styles from "./HeaderBar.module.css";

const { Header } = Layout;

const ItemContent = ({ title, icon }) => {
  return (
    <div className={Styles.button_custom}>
      {icon} {title}
    </div>
  );
};

const content = () => {
  return (
    <>
      <ItemContent title="Tài khoản" icon={<UserOutlined />} />
      <Divider style={{ margin: "8px 0px" }} />
      <ItemContent title="Đăng xuất" icon={<UserOutlined />} />
    </>
  );
};

const HeaderBar = (props) => {
  return (
    <Header className="header-bar" style={{ backgroundColor: "wheat" }}>
      <Row>
        <Col span={22}></Col>
        <Col span={2}>
          <Space
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <Popover
              style={{ backgroundColor: "white" }}
              placement="bottomRight"
              // title={text}
              content={content}
              trigger="click"
            >
              <Avatar
                style={{ backgroundColor: "#87d068" }}
                icon={<UserOutlined />}
              />
            </Popover>
          </Space>
        </Col>
      </Row>
    </Header>
  );
};

export default HeaderBar;
