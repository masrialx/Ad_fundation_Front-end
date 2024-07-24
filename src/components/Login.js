import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Login.css'; // Import the CSS file

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/login', { email, password });
      alert(response.data.msg);
      // Optionally, redirect to another page or save token to local storage
    } catch (error) {
      console.error(error);
      alert('An error occurred.');
    }
  };

  return (
    <Container className="login-container">
      <div className="login-card">
        <h2 className="login-title">Login</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="login-input"
            />
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="login-input"
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="login-button">
            Login
          </Button>
        </Form>
        <Row className="mt-3">
          <Col>
            <Link to="/reset-password" className="reset-password-link">Forgot Password?</Link>
          </Col>
        </Row>
       
          <Col>
            <Link to="/signup" className="reset-password-link">I dont have account?</Link>
          </Col>
     
      </div>
    </Container>
  );
}

export default Login;
