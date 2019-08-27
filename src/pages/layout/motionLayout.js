import React from 'react';
import { Layout, Menu } from 'antd';
const { Header,Content,Sider } = Layout;

const MotionLayout = () => {
  return (
    <Layout>
      <Header>
        <div>logo</div>
        <Menu>
          <Menu.Item>HOVER</Menu.Item>
          <Menu.Item>MOVEMENT</Menu.Item>
          <Menu.Item>PAGE</Menu.Item>
        </Menu>
      </Header>
      <Content>
        <Layout>
          <Sider>
            1234
          </Sider>
          <Content>124</Content>
        </Layout>
      </Content>
    </Layout>
  );
};
export default MotionLayout;
