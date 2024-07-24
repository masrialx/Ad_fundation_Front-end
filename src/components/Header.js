import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'; // Import custom CSS for additional styling

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="header">
      <Navbar.Brand as={Link} to="/" className="brand">Donation Foundation</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/" className="nav-link">Home</Nav.Link>
          <Nav.Link as={Link} to="/login" className="nav-link">Login</Nav.Link>
          <Nav.Link as={Link} to="/posts" className="nav-link">Posts</Nav.Link>
          <Nav.Link as={Link} to="/donate" className="nav-link">Donate</Nav.Link>
          <Nav.Link as={Link} to="/feedback" className="nav-link">Feedback</Nav.Link>
          <Nav.Link as={Link} to="/admin" className="nav-link">Admin</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
