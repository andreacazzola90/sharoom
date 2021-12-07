import { BorderOutlined, FundProjectionScreenOutlined, HeartOutlined, WifiOutlined } from '@ant-design/icons';
import { Card, Image, Row, Col, Space, Typography, Button, Tag, Layout } from 'antd';
import Sider from 'antd/lib/layout/Sider';
const { Title, Text, Link } = Typography;
import { getAllPosts } from '../../lib/api'

import React, { useState } from 'react';

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}

export default function App({ allPosts }) {
  return (

    <div>

      {JSON.stringify(allPosts[2])}
      <Layout className="site-layout-background" style={{ background: '#FFF' }}>
        <Row>
          <Col span={10}>
            <Image src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
          </Col>
          <Col span={14} >
            <Layout style={{ padding: 24, background: '#FFF' }}>
              <Title level={1}>Stanza con letto matrimoniale</Title>
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
              <Row >
                <Col>
                  <Tag color="blue">Privato</Tag>
                </Col>
              </Row>

              <Space direction="vertical" >
                <Text type="secondary">A partire da</Text>
                <Text >23€/notte</Text>
              </Space>

            </Layout>
          </Col>
        </Row>



      </Layout>
    </div>
  )
}




