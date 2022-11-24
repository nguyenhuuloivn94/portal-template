import { Layout, Menu, notification } from "antd";
import React, { useEffect, useState } from "react";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/router";

const { Sider } = Layout;

const SiderBar = ({}) => {
  const router = useRouter();

  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const items = [
    getItem("Navigation One", "sub1", <MailOutlined />, [
      getItem(
        "Item 1",
        "g1",
        null,
        [getItem("Option 1", "1"), getItem("Option 2", "2")],
        "group"
      ),
      getItem(
        "Item 2",
        "g2",
        null,
        [getItem("Option 3", "3"), getItem("Option 4", "4")],
        "group"
      ),
    ]),
    getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
      getItem("Option 5", "5"),
      getItem("Option 6", "6"),
      getItem("Submenu", "sub3", null, [
        getItem("Option 7", "7"),
        getItem("Option 8", "8"),
      ]),
    ]),
    getItem("Navigation Three", "sub4", <SettingOutlined />, [
      getItem("Option 9", "9"),
      getItem("Option 10", "10"),
      getItem("Option 11", "11"),
      getItem("Option 12", "12"),
    ]),
    getItem(
      "Group",
      "grp",
      null,
      [getItem("Option 13", "13"), getItem("Option 14", "14")],
      "group"
    ),
  ];

  const routerConfig = [
    {
      key: "1",
      route: "/test1",
    },
    {
      key: "2",
      route: "/test2",
    },
  ];

  const handleSelectMenu = (e) => {
    const { key } = e;
    const route = routerConfig.find((r) => r.key === key)?.route;
    if (route) {
      router.push(route);
    } else {
      notification.error({ message: "Menu chưa được thiết lập", duration: 1 });
    }
  };

  return (
    <Sider
      theme={"light"}
      // breakpoint="xl"
      // collapsedWidth="0"
      //   trigger={null}
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
      }}
      width={"15%"}
    >
      <div>test</div>
      <Menu
        mode="inline"
        // selectedKeys={siderPicker?.selectedKey}
        // openKeys={siderPicker?.openKey}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{
          height: "100%",
        }}
        items={items}
        onSelect={handleSelectMenu}
        onOpenChange={(e) => {}}
      />
    </Sider>
  );
};

export default SiderBar;
