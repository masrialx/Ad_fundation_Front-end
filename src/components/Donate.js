import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import './Donate.css'; // Ensure to import this CSS file

function Donate() {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/donate', { amount, description });
      window.location.href = response.data.payment_link;
    } catch (error) {
      console.error(error);
      alert('An error occurred.');
    }
  };

  return (
    <Container className="donate-container">
      <Row className="justify-content-center">
        <Col md={6}>
          <div className="donate-card">
            <h2 className="donate-title">Donate</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formAmount">
                <Form.Label>Amount</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100">
                Donate
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Donate;
