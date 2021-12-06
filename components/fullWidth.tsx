import React, { useState, FunctionComponent } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import Link from 'next/link';
import { withRouter, NextRouter } from 'next/router';
import { WithRouterProps } from 'next/dist/client/with-router';

import {
  DesktopOutlined,
  DashboardOutlined,
  SettingOutlined,
} from '@ant-design/icons';

import './Layout.css';

const { SubMenu, Item } = Menu;
const { Header, Sider, Content, Footer } = Layout;

interface Router extends NextRouter {
  path: string;
  breadcrumbName: string;
}

interface Props extends WithRouterProps {
  router: Router;
}

function itemRender(route: Router) {
  return route.path === 'index' ? (
    <Link href={'/'}>
      <a>{route.breadcrumbName}</a>
    </Link>
  ) : (
    <span>{route.breadcrumbName}</span>
  );
}

function routesMaker(pathsplit: string[]) {
  let routes = [
    {
      path: 'rooms',
      breadcrumbName: 'rooms',
    },
  ];
  for (let v of pathsplit) {
    const pathInfo = {
      path: v,
      breadcrumbName: v,
    };
    if (v !== '') routes.push(pathInfo);
  }
  return routes;
}

const FullWdth = (props: React.PropsWithChildren<Props>) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const onChangeIsCollapsed = (isCollapsed: boolean) => {
    setIsCollapsed(isCollapsed);
  };

  const pathname = props.router.pathname;
  const pathsplit: string[] = pathname.split('/');
  const routes = routesMaker(pathsplit);

  return (

    <Layout className="layout">
      <Header>
        <div className="app__logo " />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Item key="rooms" icon={<DesktopOutlined />}>
            <Link href="/rooms">
              <a>Rooms</a>
            </Link>
          </Item>
          <Item key="room" icon={<DesktopOutlined />}>
            <Link href="/rooms/room">
              <a>Room</a>
            </Link>
          </Item>
          <Item key="user" icon={<DashboardOutlined />}>
            <Link href="/user">
              <a>User</a>
            </Link>
          </Item>
          <SubMenu key="menu3" icon={<SettingOutlined />} title="Menu 3">
            <Item key="submenu1">
              <Link href="/menu3/submenu1">
                <a>Submenu 1</a>
              </Link>
            </Item>
            <Item key="submenu2">
              <Link href="/menu3/submenu2">
                <a>Submenu 2</a>
              </Link>
            </Item>
          </SubMenu>
        </Menu>
        <div className="app__logo " />
      </Header>


      <Layout style={{ padding: '24px 48px' }}>
        <Breadcrumb
          style={{ margin: '16px 0' }}
          itemRender={itemRender}
          routes={routes}
        />


        <Layout className="site-layout-background" style={{}}>
          <Sider className="site-layout-background" width={400}></Sider>
          <Content
            className="site-layout-background"
            style={{
              padding: 48,
              minHeight: 100,
              backgroundColor: '#ffffff',
            }}
          >
            {props.children}
          </Content>
        </Layout>
      </Layout>

      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>


  );
};

export default withRouter(FullWdth);
