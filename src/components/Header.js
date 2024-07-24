import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Header.css'; // Import custom CSS for additional styling

function Header() {
  const [expanded, setExpanded] = useState(false);
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 100) {
        setShowHeader(true);
      } else if (currentScrollY > 100 && currentScrollY <= 1000) {
        setShowHeader(false);
      } else if (currentScrollY > 1000) {
        setShowHeader(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      className={`header ${showHeader ? 'visible' : 'hidden'}`}
      expanded={expanded}
    >
      <Navbar.Brand as={Link} to="/" className="brand">
        Donation Foundation
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        onClick={() => setExpanded(expanded ? false : "expanded")}
      >
        <FontAwesomeIcon icon={expanded ? faTimes : faBars} className="toggler-icon" />
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/" className="nav-link" onClick={handleNavClick}>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/login" className="nav-link" onClick={handleNavClick}>
            Login
          </Nav.Link>
          <Nav.Link as={Link} to="/posts" className="nav-link" onClick={handleNavClick}>
            Posts
          </Nav.Link>
          <Nav.Link as={Link} to="/donate" className="nav-link" onClick={handleNavClick}>
            Donate
          </Nav.Link>
          <Nav.Link as={Link} to="/feedback" className="nav-link" onClick={handleNavClick}>
            Feedback
          </Nav.Link>
          <Nav.Link as={Link} to="/admin" className="nav-link" onClick={handleNavClick}>
            Admin
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
