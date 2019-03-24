import React from 'react';
import Link from 'next/link';
import 'antd/dist/antd.css';
import './DefaultLayout.css';
import {
  Layout, Menu, Icon, Button
} from 'antd';

const { SubMenu } = Menu;
const {
  Header, Content, Footer, Sider,
} = Layout;
const DefaultLayout = ({ order: pageorder, content: pagecontent } = props) => (
  <Layout>
    <Header className="header">
      <div className="logo"><img className="logoimg" src="/static/tmp.jpg" alt="logo" /></div>
      <Button type="primary" className="login">登录</Button>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={pageorder}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1"><Link href="/index"><a>主页</a></Link></Menu.Item>
        <Menu.Item key="2"><Link href="/about"><a>简介</a></Link></Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Layout style={{ padding: '24px 0', background: '#fff' }}>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >
            <SubMenu
              key="sub1"
              title={(
                <span>
                  <Icon type="user" />
                  subnav 1
                </span>
              )}
            >
              <Menu.Item key="1">option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={(
                <span>
                  <Icon type="laptop" />
                  subnav 2
                </span>
              )}
            >
              <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              title={(
                <span>
                  <Icon type="notification" />
                  subnav 3
                </span>
              )}
            >
              <Menu.Item key="9">option9</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
          {pagecontent}
        </Content>
      </Layout>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      <p>This is Footer!</p>
      <p>Create by Shawn</p>
    </Footer>
  </Layout>
);
export default DefaultLayout;
