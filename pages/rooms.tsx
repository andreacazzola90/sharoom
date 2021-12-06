import { BorderOutlined, FundProjectionScreenOutlined, HeartOutlined, WifiOutlined } from '@ant-design/icons';
import { Card, Image, Row, Col, Space, Typography, Button, Tag } from 'antd';
import Layout from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
const { Title, Text, Link } = Typography;

import React, { useState } from 'react';


export default function App() {
  return (
    <div>


      <Layout className="site-layout-background" style={{}}>
        <Sider className="site-layout-background" width={400}></Sider>

        <Layout style={{ padding: '24px 48px' }}>

          <Card style={{ padding: 12, marginBottom: 24 }}>
            <Row>
              <Col span={8}>
                <Image height={300} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
              </Col>
              <Col span={16} >
                <Row justify="space-between">
                  <Col>
                    <Title level={2}>Stanza con letto matrimoniale</Title>
                  </Col>
                  <Col>
                    <HeartOutlined style={{ fontSize: 25 }} />
                  </Col>
                </Row>
                <Space size={5}><BorderOutlined /><Text>28 mq</Text></Space>
                <Title level={4}>via indirizzo n.xx Città - (MI)</Title>
                <Text>In appartamento abitato si affitta stanza con letto matrimoniale</Text>
                <Row>
                  <Col>
                    <Space size={5}>
                      <WifiOutlined /><FundProjectionScreenOutlined />
                    </Space>
                  </Col>
                </Row>
                <Row justify="space-between" align="bottom">
                  <Col>
                    <Tag color="blue">Privato</Tag>
                  </Col>
                  <Col>
                    <Space direction="vertical" >
                      <Text type="secondary">A partire da</Text>
                      <Text >23€/notte</Text>
                    </Space>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card>

          <Card style={{ padding: 12 }}>
            <Row>
              <Col span={8}>
                <Image height={300} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
              </Col>
              <Col span={16} >
                <Title level={2}>Stanza con letto matrimoniale</Title>
                <Space size={5}><BorderOutlined /><Text>28 mq</Text></Space>
                <Title level={4}>via indirizzo n.xx Città - (MI)</Title>
                <Text>In appartamento abitato si affitta stanza con letto matrimoniale</Text>
                <Row>
                  <Col>
                    <Space size={5}>
                      <WifiOutlined /><FundProjectionScreenOutlined />
                    </Space>
                  </Col>
                </Row>
                <Row justify="space-between" align="bottom">
                  <Col>
                    <Tag color="blue">Privato</Tag>
                  </Col>
                  <Col>
                    <Space direction="vertical" >
                      <Text type="secondary">A partire da</Text>
                      <Text >23€/notte</Text>
                    </Space>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card>
        </Layout>

      </Layout>


    </div>
  )
}

export async function getServerSideProps({ req }) {
  const headers = req ? req.headers : {};
  return { props: { headers } }
}