import { Card, Image, Row, Col } from 'antd';
import React, { useState } from 'react';

export default function App() {
  return (
    <div>


      <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 'auto' }}>
        <Row>
          <Col >
            <Image width={200} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
          </Col>
          <Col >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Col>
        </Row>
      </Card>

      <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 'auto' }}>
        <Row>
          <Col >
            <Image width={200} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
          </Col>
          <Col >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>

          </Col>
        </Row>
      </Card>


    </div>
  )
}

export async function getServerSideProps({ req }) {
  const headers = req ? req.headers : {};
  return { props: { headers } }
}