// components/FeedbackPage.js

import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios'; // Make sure to install axios for handling API requests
import './FeedbackPage.css'; // Import the CSS for styling

const FeedbackPage = () => {
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertContent, setAlertContent] = useState({ type: '', text: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Replace with your API endpoint or email service
      await axios.post('/api/send-feedback', { email, title, description });
      setAlertContent({ type: 'success', text: 'Thank you for your feedback!' });
    } catch (error) {
      setAlertContent({ type: 'danger', text: 'Something went wrong, please try again later.' });
    }
    
    setShowAlert(true);
    setEmail('');
    setTitle('');
    setDescription('');
  };

  return (
    <Container className="feedback-container">
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <h1 className="text-center">We'd Love Your Feedback!</h1>
          {showAlert && (
            <Alert variant={alertContent.type} onClose={() => setShowAlert(false)} dismissible>
              {alertContent.text}
            </Alert>
          )}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Feedback title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Your feedback"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Send Feedback
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default FeedbackPage;
