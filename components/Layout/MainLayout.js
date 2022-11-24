import { FloatButton, Button, Layout } from "antd";
import React, { useEffect, useRef } from "react";
import Sign from "../Authorization/SignIn";
import SiderBar from "./SiderBar";
import HeaderBar from "./HeaderBar";

const { Content, Footer } = Layout;

const Main = ({ children }) => {
  return (
    <>
      <Sign>
        <Layout style={{ minHeight: "100vh" }}>
          <HeaderBar />
          <Layout style={{ marginLeft: "15%", backgroundColor: "#ffffff" }}>
            <SiderBar />
            <Content
              style={{
                margin: "24px 16px 0",
                overflow: "initial",
              }}
            >
              {children}
            </Content>
          </Layout>
        </Layout>
      </Sign>
      <FloatButton.BackTop />
    </>
  );
};

export default Main;
