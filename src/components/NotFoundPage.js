import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function NotFoundPage() {
  return (
    <Container className="mt-5 text-center">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <p>Sorry, the page you are looking for does not exist.</p>
          <Button as={Link} to="/" variant="primary">Go to Home</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default NotFoundPage;
