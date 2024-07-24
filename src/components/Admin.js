import React, { useState, useEffect } from 'react';
import { Container, Table, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import './Admin.css'; // Ensure to import this CSS file

function Admin() {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    async function fetchDonations() {
      try {
        const response = await axios.get('/admin/donations');
        setDonations(response.data.donations);
      } catch (error) {
        console.error(error);
        alert('An error occurred while fetching donations.');
      }
    }
    fetchDonations();
  }, []);

  return (
    <Container className="admin-container">
      <Row className="mb-4">
        <Col>
          <h2 className="admin-title">Admin Panel</h2>
          <h3 className="admin-subtitle">Donation History</h3>
        </Col>
      </Row>
      <Table striped bordered hover responsive className="donations-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Amount</th>
            <th>Description</th>
            <th>Date</th> {/* Assuming donations have a date */}
          </tr>
        </thead>
        <tbody>
          {donations.map((donation, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>${donation.amount}</td>
              <td>{donation.description}</td>
              <td>{donation.date}</td> {/* Assuming donations have a date */}
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default Admin;
