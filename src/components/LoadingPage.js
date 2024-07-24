import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ClipLoader } from 'react-spinners';
import 'bootstrap/dist/css/bootstrap.min.css';

function LoadingPage() {
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <Row>
        <Col className="text-center">
          <ClipLoader size={60} color={"#007bff"} loading={true} />
        </Col>
      </Row>
    </Container>
  );
}

export default LoadingPage;
