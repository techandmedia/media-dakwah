import React from "react";
import { Layout, Menu, Icon } from "antd";

const { Header, Content, Footer, Sider } = Layout;

export default function MainLayout(props) {
  // console.log(props);
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
          // console.log("broken", broken);
        }}
        onCollapse={(collapsed, type) => {
          props.onSiderChange(collapsed);
          // console.log("cc", collapsed, type);
        }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline">
          <Menu.Item key="1">
            <Icon type="user" />

            <span className="nav-text">Peta Dakwah</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="video-camera" />

            <span className="nav-text">Cari Dai</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="upload" />
            <span className="nav-text">Cari Khotib</span>
          </Menu.Item>
          <Menu.Item key="4">
            <Icon type="user" />
            <span className="nav-text">Daftar</span>
          </Menu.Item>
          <Menu.Item key="5">
            <Icon type="user" />
            <span className="nav-text">Login</span>
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout>
        <Header style={{ background: "#fff", padding: 0 }}>
          {props.header}
        </Header>

        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              background: "#fff",
              minHeight: 460,
              overflow: "initial"
            }}
          >
            {props.children}
          </div>
        </Content>

        <Footer style={{ textAlign: "center", lineHeight: 1 }}>
          <a
            href="https://subarnanto.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "grey" }}
          >
            Created by Eko Andri Subarnanto <br />
            <span>Web Developer and Designer</span>
          </a>
        </Footer>
      </Layout>
    </Layout>
  );
}
