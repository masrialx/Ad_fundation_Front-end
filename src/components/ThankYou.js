// ThankYou.js

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './ThankYou.css';

const ThankYou = () => {
  return (
    <Container className="thank-you-container">
      <Row className="justify-content-center">
        <Col xs={12} md={8} className="text-center">
          <div className="thank-you-message">
            <h1>Thank You!</h1>
            <p>
              Your generous donation helps us continue our mission and make a
              difference in the lives of many. Your support is invaluable to us!
            </p>
            <Button variant="primary" href="/">Back to Home</Button>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} className="animation-container">
          <div className="heart"></div>
        </Col>
      </Row>
    </Container>
  );
};

export default ThankYou;
