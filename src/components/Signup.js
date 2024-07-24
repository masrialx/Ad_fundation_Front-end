import React, { useState } from 'react';
import { Form, Button, Container, NavLink, Col } from 'react-bootstrap';
import axios from 'axios';
import './Signup.css'; // Import the CSS file
import { Link } from 'react-router-dom';

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/signup', { username, email, password });
      alert(response.data.msg);
    } catch (error) {
      console.error(error);
      alert('An error occurred.');
    }
  };

  return (
    <Container className="signup-container">
      <div className="signup-card">
        <h2 className="signup-title">Sign Up</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="signup-input"
            />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="signup-input"
            />
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="signup-input"
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="signup-button">
            Sign Up
          </Button>
          <Col>
            <Link to="/login" className="reset-password-link">I have account </Link>
          </Col>
        </Form>
      </div>
    </Container>
  );
}

export default Signup;
